<template>
  <v-card class="ponto-card" elevation="0">
    <v-card-title class="text-uppercase text-center">{{ ponto.categoria }}</v-card-title>
    <v-card-subtitle class="text-uppercase text-center">{{ ponto.nome }}</v-card-subtitle>
    <v-card-text class="text-center">
      <div class="ponto-endereco">
        <div>{{ ponto.endereco }}</div>
      </div>
    </v-card-text>
    <v-card-actions class="justify-center pb-4">
      <v-btn color="success" variant="flat" rounded="pill" class="px-8" @click="verNoMapa">
        VER NO MAPA
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { inject } from 'vue';

const props = defineProps({
  ponto: {
    type: Object,
    required: true
  }
});

const mapaRef = inject('mapaRef');

const verNoMapa = () => {
  if (mapaRef?.value && props.ponto) {
    const nome = props.ponto.nome + " (" + props.ponto.categoria + ")";
    mapaRef.value.centralizarMapa(props.ponto.longitude, props.ponto.latitude, nome);
  }
};
</script>


<style scoped>
.ponto-card {
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.ponto-card .v-card-title,
.ponto-card .v-card-subtitle {
  text-transform: uppercase;
  font-weight: bold;
}

.ponto-endereco {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ponto-endereco div {
  margin: 4px 0;
}

.v-btn {
  transition: background-color 0.2s ease;
}

.v-btn:hover {
  background-color: #388e3c;
}

a {
  text-decoration: none;
  color: #1976d2;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
