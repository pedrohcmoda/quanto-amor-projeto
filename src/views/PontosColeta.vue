<template>
    <v-container fluid class="pa-0">
      <h1 class="text-center text-h4 my-8">PONTOS DE COLETA</h1>
  
      <!-- Grid de Pontos de Coleta -->
      <v-row class="px-16">
        <v-col 
          v-for="ponto in pontosColeta" 
          :key="ponto.categoria"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <ponto-coleta-card :ponto="ponto" />
        </v-col>
      </v-row>
  
      <!-- Componente de Busca por CEP -->
      <div class="bg-background pa-16 mt-16">
        <cep-busca />
      </div>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { db } from '@/db/firebaseConfig';
  import { collection, getDocs } from 'firebase/firestore';
  import PontoColetaCard from '@/components/PontoColetaCard.vue';
  import CepBusca from '@/components/CepBusca.vue';

  const pontosColeta = ref([]);
  onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, 'pontosColeta'));
    pontosColeta.value = querySnapshot.docs.map(doc => doc.data());
  });
  </script>
  
  <style scoped>
  .bg-background {
    background-color: #E8F5E9;
  }
  </style>