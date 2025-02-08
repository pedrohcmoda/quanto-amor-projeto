<template>
  <v-card class="blog-card" height="500">
    <v-img :src="article.image" class="grey lighten-2" height="500" cover>
      <div class="article-overlay">
        <v-card-title class="text-h5 text-white roboto text-truncate">
          {{ article.titulo }}
        </v-card-title>
        <v-card-subtitle class="text-white pb-0 pt-2">
          {{ article.data }}
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
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border-radius: 16px;
  aspect-ratio: 1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.article-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
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
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0;
  margin-bottom: 8px;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
}

:deep(.v-card-subtitle) {
  font-size: 1rem;
  padding: 0;
  opacity: 0.85;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
}
</style>
