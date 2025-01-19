<template>
    <div class="bairros-grid">
        <h2 class="text-center text-h4 mb-8">BAIRROS DE CORNELIO PROCOPIO</h2>
        <div class="carousel-container">
            <v-carousel
                v-model="currentPage"
                hide-delimiters
                height="400"
                :show-arrows="false"
            >
                <v-carousel-item
                    v-for="page in paginatedBairros"
                    :key="page[0].nome"
                >
                    <v-row class="fill-height">
                        <v-col
                            v-for="bairro in page"
                            :key="bairro.nome"
                            cols="12"
                            sm="6"
                            md="4"
                            lg="3"
                            class="d-flex"
                        >
                            <v-card
                                flat
                                class="bairro-card"
                                width="100%"
                                height="160"
                            >
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
            <v-btn
                v-for="n in totalPages"
                :key="n"
                :color="currentPage === n-1 ? 'success' : ''"
                variant="text"
                class="mx-1"
                @click="currentPage = n-1"
            >
                {{ n }}
            </v-btn>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    const bairros = [
    { 
        nome: 'CENTRO', 
        dias: 'SEG    QUI',
        cep: '86300-000',
        tipoColeta: ['Orgânico', 'Reciclável']
    },
    { 
        nome: 'JARDIM ESTORIL', 
        dias: 'TER    SEX',
        cep: '86300-010',
        tipoColeta: ['Orgânico', 'Reciclável']
    },
    { 
        nome: 'JARDIM PANORAMA', 
        dias: 'QUA    SAB',
        cep: '86300-020',
        tipoColeta: ['Reciclável']
    },
    { 
        nome: 'JARDIM PRIMAVERA', 
        dias: 'SEG    QUI',
        cep: '86300-030',
        tipoColeta: ['Orgânico', 'Reciclável']
    },
    { 
        nome: 'JARDIM PROGRESSO', 
        dias: 'TER    SEX',
        cep: '86300-040',
        tipoColeta: ['Reciclável']
    },
    { 
        nome: 'VILA PARAISO', 
        dias: 'QUA    SAB',
        cep: '86300-050',
        tipoColeta: ['Orgânico']
    },
    { 
        nome: 'VILA AMERICA', 
        dias: 'SEG    QUI',
        cep: '86300-060',
        tipoColeta: ['Reciclável']
    },
    { 
        nome: 'JARDIM BELA VISTA', 
        dias: 'TER    SEX',
        cep: '86300-070',
        tipoColeta: ['Orgânico', 'Reciclável']
    },
    { 
        nome: 'VILA INDEPENDENCIA', 
        dias: 'QUA    SAB',
        cep: '86300-080',
        tipoColeta: ['Reciclável']
    },
    { 
        nome: 'VILA SANTA TEREZINHA', 
        dias: 'SEG    QUI',
        cep: '86300-090',
        tipoColeta: ['Orgânico']
    },
    { 
        nome: 'JARDIM FIGUEIRA', 
        dias: 'TER    SEX',
        cep: '86300-100',
        tipoColeta: ['Reciclável']
    },
    { 
        nome: 'VILA SEUGLING', 
        dias: 'QUA    SAB',
        cep: '86300-110',
        tipoColeta: ['Orgânico', 'Reciclável']
    }]

    const currentPage = ref(0)
    const itemsPerPage = 8

    const paginatedBairros = computed(() => {
    const pages = []
    for (let i = 0; i < bairros.length; i += itemsPerPage) {
        pages.push(bairros.slice(i, i + itemsPerPage))
    }
    return pages
    })

    const totalPages = computed(() => Math.ceil(bairros.length / itemsPerPage))

    const getBairroByCep = (cep) => {
    return bairros.find(bairro => bairro.cep === cep)
    }

    defineExpose({
        getBairroByCep
    })
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
    background-color: #D3D3D3;
    transition: transform 0.2s;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.bairro-card:hover {
    transform: translateY(-5px);
}

:deep(.v-carousel) {
    background-color: transparent;
    height: 100% !important;
}

:deep(.v-carousel__controls) {
    background-color: transparent;
}

:deep(.v-window__container) {
    height: 100%;
}

:deep(.v-window-item) {
    height: 100%;
}

:deep(.v-card-title) {
    font-size: 1.1rem;
    line-height: 1.2;
    padding: 12px;
}

:deep(.v-card-subtitle) {
    font-size: 0.875rem;
    padding-top: 0;
}

:deep(.v-card-text) {
    padding-top: 0;
    font-size: 1rem;
}
</style>
