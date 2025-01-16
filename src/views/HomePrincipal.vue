<template>
  <v-container fluid class="pa-0">
    <!-- Hero Section -->
    <v-row no-gutters class="hero-section">
      <v-col cols="12" md="6" class="d-flex flex-column justify-center pa-16">
        <h1 class="text-h2 font-weight-bold">
          <span>PEQUENAS AÇÕES</span><br>
          <span class="text-success">GRANDES</span>
          <span>IMPACTOS</span>
        </h1>
        <p class="text-subtitle-1 mt-4">
          ADOTE A COLETA SELETIVA EM SUA ROTINA.
        </p>
        <div class="mt-6">
          <v-btn
            color="success"
            size="x-large"
            class="me-4"
            rounded="pill"
          >
            SAIBA MAIS
          </v-btn>
          <v-btn
            variant="outlined"
            color="success"
            size="x-large"
            rounded="pill"
          >
            PONTOS DE COLETA
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="hero-image">
        <v-img
          src="@/assets/images/globe-illustration.png"
          class="rounded-lg"
          cover
        ></v-img>
      </v-col>
    </v-row>

    <!-- Parallax Section -->
    <v-parallax
      src="@/assets/images/forest-background.jpg"
      height="600"
    >
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card
            class="pa-6 text-center"
            color="background"
            elevation="8"
          >
            <v-img
              src="@/assets/images/eco-icon.svg"
              height="100"
              contain
              class="mb-4"
            ></v-img>
            <p class="text-body-1">
              É ATRAVÉS DE PEQUENAS AÇÕES COMO TRABALHAR, ESTUDAR OU ATÉ A SUA INICIATIVA DE ENTREGAR 
              RECICLÁVEIS, QUE VOCÊ FAZ A DIFERENÇA E PERMITE QUE MAIS PESSOAS CONTINUEM SEUS ESTUDOS, 
              TENHAM DIGNIDADE E SEJAM CONTEMPLADAS
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
  </v-container>
</template>

<script setup>
// Composition API setup
</script>

<style scoped>
.hero-section {
  min-height: 90vh;
  background-color: #E8F5E9;
}

.hero-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.text-success {
  color: #4CAF50 !important;
}
</style>
