<template>
  <v-container fluid class="pa-0 admin-container">
    <div class="d-flex justify-center">
      <v-tabs v-model="tab">
        <v-tab>Bairros</v-tab>
        <v-tab>Pontos de Coleta</v-tab>
        <v-tab>Posts</v-tab>
        <v-tab>Auditoria</v-tab>
      </v-tabs>
    </div>

    <div class="d-flex justify-center">
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
        <v-tab-item>
          <auditoria-management v-if="tab === 3" />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import BairrosManagement from '@/components/BairrosManagement.vue';
import PontosColetaManagement from '@/components/PontosColetaManagement.vue';
import PostsManagement from '@/components/PostsManagement.vue';
import AuditoriaManagement from '@/components/AuditoriaManagement.vue';

const tab = ref(0);
</script>

<style scoped>
.d-flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.admin-container {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.v-tabs {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.v-tab {
  font-weight: bold;
  color: #333333;
}

.v-tab--active {
  color: #007bff;
}

.v-tabs-items {
  margin-top: 20px;
}
</style>