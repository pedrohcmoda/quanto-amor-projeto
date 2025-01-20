<template>
  <v-container fluid class="pa-0">

    <div class="bg-background pa-16">
      <cep-busca />
    </div>
    <BairrosGrid />
  </v-container>
</template>

<script setup>
import CepBusca from '@/components/CepBusca.vue'
import BairrosGrid from '@/components/BairrosGrid.vue';
</script>
  