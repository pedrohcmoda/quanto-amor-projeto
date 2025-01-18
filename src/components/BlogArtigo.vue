<template>
    <v-card class="blog-card" height="400">
      <v-img
        src="../../public/images/planeta_cidade.png"
        class="grey lighten-2"
        height="400"
        cover
      >
        <div class="article-overlay">
          <v-card-title class="text-white roboto">
            {{ article.title }}
          </v-card-title>
          <v-card-subtitle class="text-white pb-0">
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
    }

    .blog-card:hover {
    transform: translateY(-5px);
    }

    .article-overlay {
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 16px;
    }

    .roboto {
    font-family: 'Roboto', sans-serif !important;
    font-weight: 500;
    }
</style>
