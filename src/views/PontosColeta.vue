<template>
    <v-container fluid class="pa-0">
      <h1 class="text-center text-h4 my-8">PONTOS DE COLETA</h1>
  
      <!-- Grid de Pontos de Coleta -->
      <v-row class="px-16">
        <v-col 
          v-for="ponto in pontosColeta" 
          :key="ponto.tipo"
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
  import PontoColetaCard from '@/components/PontoColetaCard.vue'
  import CepBusca from '@/components/CepBusca.vue'
  
  const pontosColeta = [
    {
      tipo: 'ELETRONICO',
      local: 'COOPERATIVA RECICLATECH',
      endereco: 'RUA DOS COMPUTADORES, 123',
      cidade: 'CORNELIO PROCOPIO - PR',
      cep: '86300-000'
    },
    {
      tipo: 'PILHAS E BATERIAS',
      local: 'DROGARIA FARMABEM',
      endereco: 'AV. PRINCIPAL, 456 - CENTRO',
      cidade: 'CORNELIO PROCOPIO - PR',
      cep: '86300-000'
    },
    {
      tipo: 'VIDRO',
      local: 'PRAÇA DA RECICLAGEM',
      endereco: 'RUA DA SUSTENTABILIDADE, 789',
      cidade: 'CORNELIO PROCOPIO - PR',
      cep: '86300-000'
    },
    {
      tipo: 'ÓLEO DE COZINHA',
      local: 'SUPERMERCADO ECOMERCADO',
      endereco: 'RUA VERDE, 1011 - VILA VERDE',
      cidade: 'CORNELIO PROCOPIO - PR',
      cep: '86300-000'
    },
    // Duplicar os mesmos pontos para completar a grid
  ]
  </script>
  
  <style scoped>
  .bg-background {
    background-color: #E8F5E9;
  }
  </style>