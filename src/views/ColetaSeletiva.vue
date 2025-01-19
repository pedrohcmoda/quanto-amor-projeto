<template>
  <v-container fluid class="pa-0">
    <BairrosGrid />
    <div class="bg-background pa-16">
      <cep-busca />
    </div>
  </v-container>
</template>

<script setup>
import CepBusca from '@/components/CepBusca.vue'
import BairrosGrid from '@/components/BairrosGrid.vue';
</script>
  