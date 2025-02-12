<template>
  <v-container>
    <v-data-table :headers="headers" :items="pontosColeta" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Gerenciar Pontos de Coleta</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on" @click="editItem()">Novo Ponto de
                Coleta</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.categoria" label="Categoria"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.endereco" label="Endereço"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.localizacao" label="Localização"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.nome" label="Nome"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.latitude" label="Latitude (opcional, para exibição no mapa)"
                        type="number"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.longitude" label="Longitude (opcional, para exibição no mapa)"
                        type="number"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Tem certeza que deseja excluir este item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { db } from '@/db/firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const auth = getAuth();
const pontosColeta = ref([]);
const headers = [
  { text: 'Categoria', value: 'categoria' },
  { text: 'Endereço', value: 'endereco' },
  { text: 'Localização', value: 'localizacao' },
  { text: 'Ações', value: 'actions', sortable: false }
];

const dialog = ref(false);
const dialogDelete = ref(false);
const editedIndex = ref(-1);
const editedItem = ref({
  categoria: '',
  endereco: '',
  localizacao: '',
  nome: '',
  latitude: '',
  longitude: ''
});
const defaultItem = ref({
  categoria: '',
  endereco: '',
  localizacao: '',
  nome: '',
  latitude: '',
  longitude: ''
});

const formTitle = ref('Novo Ponto de Coleta');

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'pontosColeta'));
  pontosColeta.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

const registrarAuditoria = async (acao, item) => {
  const user = auth.currentUser;
  if (!user) return;

  await addDoc(collection(db, 'auditoria'), {
    acao,
    item: item.nome,
    usuario: user.email,
    dataHora: new Date().toISOString()
  });
};

const editItem = (item) => {
  editedIndex.value = pontosColeta.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
};

const deleteItem = (item) => {
  editedIndex.value = pontosColeta.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialogDelete.value = true;
};

const deleteItemConfirm = async () => {
  await deleteDoc(doc(db, 'pontosColeta', editedItem.value.id));
  pontosColeta.value.splice(editedIndex.value, 1);
  await registrarAuditoria('Exclusão de Ponto de Coleta', editedItem.value);
  closeDelete();
};

const close = () => {
  dialog.value = false;
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  }, 300);
};

const closeDelete = () => {
  dialogDelete.value = false;
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  }, 300);
};

const save = async () => {
  if (editedIndex.value > -1) {
    await updateDoc(doc(db, 'pontosColeta', editedItem.value.id), editedItem.value);
    Object.assign(pontosColeta.value[editedIndex.value], editedItem.value);
    await registrarAuditoria('Edição de Ponto de Coleta', editedItem.value);
  } else {
    const newDoc = await addDoc(collection(db, 'pontosColeta'), editedItem.value);
    pontosColeta.value.push({ id: newDoc.id, ...editedItem.value });
    await registrarAuditoria('Criação de Ponto de Coleta', editedItem.value);
  }
  close();
};
</script>

<style scoped></style>