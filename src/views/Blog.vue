<template>
  <v-container fluid class="pa-16 bg-background">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="10">
        <v-row>
          <v-col
              v-for="article in paginatedArticles"
              :key="article.id"
              cols="12"
              sm="12"
              md="6"
              class="px-4"
          >
            <blog-article :article="article" @click.native="openArticle(article)" />
          </v-col>
        </v-row>

        <v-row class="mt-16">
          <v-col class="d-flex justify-center">
            <v-pagination
                v-model="currentPage"
                :length="totalPages"
                :total-visible="7"
                rounded="circle"
                color="success"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="90vw">
      <v-card>
        <v-card-title>{{ selectedArticle?.titulo }}</v-card-title>
        <v-card-subtitle>{{ selectedArticle?.data }}</v-card-subtitle>
        <v-card-text>
          {{ selectedArticle?.conteudo }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import BlogArticle from '@/components/BlogArtigo.vue';
import { db } from '@/db/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const articles = ref([]);
const dialog = ref(false);
const selectedArticle = ref(null);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  articles.value = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
});

const itemsPerPage = 10;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(articles.value.length / itemsPerPage));
const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return articles.value.slice(start, end);
});

const openArticle = (article) => {
  selectedArticle.value = article;
  dialog.value = true;
};
</script>

<style scoped>
.bg-background {
  background-color: #E8F5E9;
  min-height: 100vh;
}

:deep(.v-col) {
  padding-bottom: 32px;
}

:deep(.v-img) {
  margin: 16px auto;
  border-radius: 8px;
}
</style>