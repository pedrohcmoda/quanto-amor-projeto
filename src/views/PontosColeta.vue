<template>
  <v-container fluid class="pa-0">
    <h1 class="text-center text-h4 my-8">PONTOS DE COLETA</h1>

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

    <Mapa ref="mapaRef" />

    <div class="bg-background pa-16 mt-16">
      <cep-busca />
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue';
import { db } from '@/db/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import PontoColetaCard from '@/components/PontoColetaCard.vue';
import CepBusca from '@/components/CepBusca.vue';
import Mapa from '@/components/Mapa.vue';

const pontosColeta = ref([]);
const mapaRef = ref(null);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'pontosColeta'));
  pontosColeta.value = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }));
});

provide('mapaRef', mapaRef);
</script>
