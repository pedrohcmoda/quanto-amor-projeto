<template>
  <v-container>
    <v-data-table :headers="headers" :items="bairros" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Gerenciar Bairros</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on" @click="editItem()">Novo Bairro</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.nome" label="Nome"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.dias" label="Dias de Coleta"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.cep" label="CEP"></v-text-field>
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
const bairros = ref([]);
const headers = [
  { text: 'Nome', value: 'nome' },
  { text: 'Dias de Coleta', value: 'dias' },
  { text: 'CEP', value: 'cep' },
  { text: 'Ações', value: 'actions', sortable: false }
];

const dialog = ref(false);
const dialogDelete = ref(false);
const editedIndex = ref(-1);
const editedItem = ref({
  nome: '',
  dias: '',
  cep: ''
});
const defaultItem = ref({
  nome: '',
  dias: '',
  cep: ''
});

const formTitle = ref('Novo Bairro');

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'bairros'));
  bairros.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
  editedIndex.value = bairros.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
};

const deleteItem = (item) => {
  editedIndex.value = bairros.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialogDelete.value = true;
};

const deleteItemConfirm = async () => {
  await deleteDoc(doc(db, 'bairros', editedItem.value.id));
  bairros.value.splice(editedIndex.value, 1);
  await registrarAuditoria('Exclusão de Bairro', editedItem.value);
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
    await updateDoc(doc(db, 'bairros', editedItem.value.id), editedItem.value);
    Object.assign(bairros.value[editedIndex.value], editedItem.value);
    await registrarAuditoria('Edição de Bairro', editedItem.value);
  } else {
    const newDoc = await addDoc(collection(db, 'bairros'), editedItem.value);
    bairros.value.push({ id: newDoc.id, ...editedItem.value });
    await registrarAuditoria('Criação de Bairro', editedItem.value);
  }
  close();
};
</script>

<style scoped></style>