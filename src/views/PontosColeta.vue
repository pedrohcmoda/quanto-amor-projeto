<template>
  <v-container fluid class="pa-0 container-coleta">
    <PontosColetaGrid />
  </v-container>
</template>

<script setup>
import PontosColetaGrid from '@/components/PontosColetaGrid.vue';
</script>

<style scoped> 
.container-coleta {
  padding: 0 50px;
}
.bg-background {
  background-color: #f5f5f5;
}
</style>
