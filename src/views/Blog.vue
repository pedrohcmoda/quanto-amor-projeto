<template>
  <v-container fluid class="pa-16 bg-background">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="10">
        <v-row>
          <v-col v-for="article in paginatedArticles" :key="article.title" cols="12" sm="12" md="6" class="px-4">
            <blog-article :article="article" />
          </v-col>
        </v-row>

        <v-row class="mt-16">
          <v-col class="d-flex justify-center">
            <v-pagination v-model="currentPage" :length="totalPages" :total-visible="7" rounded="circle"
              color="success"></v-pagination>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref, computed } from 'vue'
import BlogArticle from '@/components/BlogArtigo.vue'
const articles = ref([
  {
    title: 'GUIA COMPLETO DA COLETA SELETIVA EM CORNÉLIO PROCÓPIO',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'DICAS PRÁTICAS PARA REDUZIR A PRODUÇÃO DE LIXO EM CASA',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'DESCARTE CONSCIENTE DE MATERIAIS ESPECÍFICOS',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'BENEFÍCIOS DA COLETA SELETIVA PARA CORNÉLIO PROCÓPIO',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'A IMPORTÂNCIA DA ECONOMIA CIRCULAR PARA UM FUTURO SUSTENTÁVEL',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'MITOS E VERDADES SOBRE A RECICLAGEM',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'DICAS DE SITES E APLICATIVOS PARA AJUDAR NA COLETA SELETIVA',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'O QUE É COLETA SELETIVA E POR QUE ELA É IMPORTANTE?',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'COMO A COLETA SELETIVA IMPACTA O MEIO AMBIENTE',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'A HISTÓRIA DA RECICLAGEM NO BRASIL',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'COMO SEPARAR O LIXO CORRETAMENTE',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'A IMPORTÂNCIA DA EDUCAÇÃO AMBIENTAL',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'PROJETOS DE RECICLAGEM EM ESCOLAS',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'COMO FAZER COMPOSTAGEM EM CASA',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'A RECICLAGEM DE ELETRÔNICOS',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'O PAPEL DO CIDADÃO NA SUSTENTABILIDADE',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'COMO AS EMPRESAS PODEM AJUDAR NA RECICLAGEM',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'A RECICLAGEM DE PLÁSTICO',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'DICAS PARA REDUZIR O CONSUMO DE PLÁSTICO',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'A RECICLAGEM DE VIDRO',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'COMO A RECICLAGEM AJUDA A ECONOMIA',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'A IMPORTÂNCIA DO LIXO SELETIVO',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'COMO FAZER A DIFERENÇA COM A RECICLAGEM',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'A RECICLAGEM DE PAPEL',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'DICAS PARA AUMENTAR A RECICLAGEM EM CASA',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'A RECICLAGEM DE METAL',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'COMO A RECICLAGEM PODE AJUDAR O PLANETA',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'A IMPORTÂNCIA DO LIXO ORGÂNICO',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'COMO A RECICLAGEM PODE REDUZIR A POLUIÇÃO',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  },
  {
    title: 'A RECICLAGEM DE TÊXTIL',
    date: '12/12/2024',
    image: '/images/blog_mural.png'
  }
])


const itemsPerPage = 10
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(articles.value.length / itemsPerPage))
const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return articles.value.slice(start, end)
})
</script>

<style scoped>
.bg-background {
  background-color: #E8F5E9;
  min-height: 100vh;
}

:deep(.v-col) {
  padding-bottom: 32px;
}
</style>