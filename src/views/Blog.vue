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
import { ref, computed, onMounted } from 'vue'
import BlogArticle from '@/components/BlogArtigo.vue'
import { db } from '@/db/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';



const articles = ref([]);
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  articles.value = querySnapshot.docs.map(doc => doc.data());
});



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