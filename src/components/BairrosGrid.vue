<template>
    <div class="bairros-grid">
        <h2 class="text-center text-h4 mb-8">BAIRROS DE CORNELIO PROCOPIO</h2>

        <div class="filters mb-6">
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field v-model="searchNome" label="Buscar por Nome do Bairro" outlined dense />
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="searchDias" label="Buscar por Dias de Coleta" outlined dense />
                </v-col>
            </v-row>
        </div>

        <div class="carousel-container">
            <v-carousel v-model="currentPage" hide-delimiters height="400" :show-arrows="false">
                <v-carousel-item v-for="page in paginatedFilteredBairros" :key="page[0].nome">
                    <v-row class="fill-height">
                        <v-col v-for="bairro in page" :key="bairro.nome" cols="12" sm="6" md="4" lg="3" class="d-flex">
                            <v-card flat class="bairro-card" width="100%" height="160">
                                <v-card-title class="text-center pt-6 text-uppercase">
                                    {{ bairro.nome }}
                                </v-card-title>
                                <v-card-subtitle class="text-center text-body-2">
                                    DIAS DE COLETA SELETIVA
                                </v-card-subtitle>
                                <v-card-text class="text-center">
                                    {{ bairro.dias }}
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-carousel-item>
            </v-carousel>
        </div>
        <div class="d-flex justify-center mt-4">
            <v-btn v-for="n in totalFilteredPages" :key="n" :color="currentPage === n - 1 ? 'success' : ''"
                variant="outlined" class="mx-1" @click="currentPage = n - 1">
                {{ n }}
            </v-btn>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { db } from '@/db/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const bairros = ref([]);
onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, 'bairros'));
    bairros.value = querySnapshot.docs.map(doc => doc.data());
});

const currentPage = ref(0);
const itemsPerPage = 8;

const searchNome = ref('');
const searchDias = ref('');

const filteredBairros = computed(() => {
    return bairros.value.filter(bairro => {
        const matchesNome = bairro.nome.toLowerCase().includes(searchNome.value.toLowerCase());
        const matchesDias = bairro.dias.toLowerCase().includes(searchDias.value.toLowerCase());
        return matchesNome && matchesDias;
    });
});

const paginatedFilteredBairros = computed(() => {
    const pages = [];
    for (let i = 0; i < filteredBairros.value.length; i += itemsPerPage) {
        pages.push(filteredBairros.value.slice(i, i + itemsPerPage));
    }
    return pages;
});

const totalFilteredPages = computed(() => Math.ceil(filteredBairros.value.length / itemsPerPage));

const getBairroByCep = (cep) => {
    return bairros.value.find(bairro => bairro.cep === cep);
};

defineExpose({
    getBairroByCep
});
</script>

<style scoped>
.bairros-grid {
    margin: 70px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.carousel-container {
    height: 400px;
    width: 100%;
}

.bairro-card {
    background-color: #fafafa;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.3s ease;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.bairro-card:hover {
    transform: translateY(-8px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

.filters {
    margin-bottom: 20px;
}

.v-btn {
    font-size: 1rem;
    font-weight: bold;
    color: #2E7D32;
    border: 2px solid #2E7D32;
}

.v-btn:hover {
    background-color: #2E7D32;
    color: white;
}
</style>
