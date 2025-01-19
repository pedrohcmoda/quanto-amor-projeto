<template>
  <v-card class="blog-card" height="500">
    <v-img
      :src="article.image"
      class="grey lighten-2"
      height="500"
      cover
    >
      <div class="article-overlay">
        <v-card-title class="text-h5 text-white roboto text-truncate">
          {{ article.title }}
        </v-card-title>
        <v-card-subtitle class="text-white pb-0 pt-2">
          {{ article.date }}
        </v-card-subtitle>
      </div>
    </v-img>
  </v-card>
</template>

<script setup>
defineProps({
  article: {
      type: Object,
      required: true
  }
})
</script>

<style scoped>
.blog-card {
  transition: transform 0.2s;
  border-radius: 16px;
  aspect-ratio: 1;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.article-overlay {
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 32px 24px;
  min-height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.roboto {
  font-family: 'Roboto', sans-serif !important;
  font-weight: 500;
  line-height: 1.4;
}

:deep(.v-card-title) {
  font-size: 1.5rem;
  padding: 0;
  margin-bottom: 8px;
}

:deep(.v-card-subtitle) {
  font-size: 1rem;
  padding: 0;
  opacity: 0.9;
}
</style>
