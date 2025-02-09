<template>
  <v-container fluid class="pa-0">
    <v-tabs v-model="tab">
      <v-tab>Bairros</v-tab>
      <v-tab>Pontos de Coleta</v-tab>
      <v-tab>Posts</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <bairros-management v-if="tab === 0" />
      </v-tab-item>
      <v-tab-item>
        <pontos-coleta-management v-if="tab === 1" />
      </v-tab-item>
      <v-tab-item>
        <posts-management v-if="tab === 2" />
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import BairrosManagement from '@/components/BairrosManagement.vue';
import PontosColetaManagement from '@/components/PontosColetaManagement.vue';
import PostsManagement from '@/components/PostsManagement.vue';

const tab = ref(0);
</script>

<style scoped>
</style>