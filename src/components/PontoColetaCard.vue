<template>
    <v-card class="ponto-card" elevation="0">
      <v-card-title class="text-uppercase text-center">{{ ponto.tipo }}</v-card-title>
      <v-card-subtitle class="text-uppercase text-center">{{ ponto.local }}</v-card-subtitle>
      <v-card-text class="text-center">
        {{ ponto.endereco }}
        <br>
        {{ ponto.cidade }} - {{ ponto.cep }}
      </v-card-text>
      <v-card-actions class="justify-center pb-4">
        <v-btn
          color="success"
          variant="flat"
          rounded="pill"
          class="px-8"
        >
          VER NO MAPA
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script setup>
  defineProps({
    ponto: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .ponto-card {
    background-color: #D3D3D3;
    border-radius: 8px;
  }
  </style>