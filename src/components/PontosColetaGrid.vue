<template>
  <div class="pontos-coleta-grid">
    <h2 class="text-center text-h4 mb-8">PONTOS DE COLETA</h2>

    <div class="filters mb-6">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="searchCategoria" label="Buscar por Categoria" outlined dense/>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="searchEndereco" label="Buscar por Endereço" outlined dense/>
        </v-col>
      </v-row>
    </div>

    <Mapa ref="mapaRef" :pontos="filteredPontos"/>

    <v-row class="px-16 mt-8">
      <v-col v-for="ponto in paginatedFilteredPontos" :key="ponto.id" cols="12" sm="6" md="4" lg="3">
        <v-card flat class="ponto-card" width="100%" height="160">
          <v-card-title class="text-center pt-6 text-uppercase">
            {{ ponto.categoria }}
          </v-card-title>
          <v-card-subtitle class="text-center text-body-2">
            {{ ponto.endereco }}
          </v-card-subtitle>
          <v-card-actions class="d-flex justify-center">
            <v-btn color="primary" @click="verNoMapa(ponto)">
              Ver no Mapa
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div class="d-flex justify-center mt-4">
      <v-btn v-for="n in totalFilteredPages" :key="n" :color="currentPage === n - 1 ? 'success' : ''" variant="outlined"
             class="mx-1" @click="currentPage = n - 1">
        {{ n }}
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import {db} from "@/db/firebaseConfig";
import {collection, getDocs} from "firebase/firestore";
import Mapa from "@/components/Mapa.vue";

const pontosColeta = ref([]);
const currentPage = ref(0);
const itemsPerPage = 8;

const searchCategoria = ref("");
const searchEndereco = ref("");

const mapaRef = ref(null);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "pontosColeta"));
  pontosColeta.value = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
});

const filteredPontos = computed(() => {
  return pontosColeta.value.filter((ponto) => {
    const matchesCategoria = ponto.categoria
        .toLowerCase()
        .includes(searchCategoria.value.toLowerCase());
    const matchesEndereco = ponto.endereco
        .toLowerCase()
        .includes(searchEndereco.value.toLowerCase());
    return matchesCategoria && matchesEndereco;
  });
});

const paginatedFilteredPontos = computed(() => {
  const pages = [];
  for (let i = 0; i < filteredPontos.value.length; i += itemsPerPage) {
    pages.push(filteredPontos.value.slice(i, i + itemsPerPage));
  }
  return pages[currentPage.value] || [];
});

const totalFilteredPages = computed(() =>
    Math.ceil(filteredPontos.value.length / itemsPerPage)
);

const verNoMapa = (ponto) => {
  if (mapaRef.value) {
    const label = `${ponto.nome} (${ponto.categoria})`;
    mapaRef.value.centralizarMapa(ponto.longitude, ponto.latitude, label);
  }
};
</script>

<style scoped>
.pontos-coleta-grid {
  margin: 70px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.filters {
  margin-bottom: 20px;
}

.ponto-card {
  background-color: #fafafa;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  border-radius: 12px;
}

.ponto-card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

.v-btn {
  font-size: 1rem;
}
</style>
