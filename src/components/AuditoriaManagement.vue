<template>
  <v-container class="container">
    <v-data-table :headers="headers" :items="auditoria" class="elevation-1" dense>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Gerenciamento de Auditoria</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/db/firebaseConfig';

const auditoria = ref([]);
const headers = [
  { text: 'Ação', value: 'acao' },
  { text: 'Item', value: 'item' },
  { text: 'Usuário', value: 'usuario' },
  { text: 'Data/Hora', value: 'dataHora' }
];

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'auditoria'));
  auditoria.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
});
</script>

<style scoped>
.container {
  width: 80vw;
}
</style>
