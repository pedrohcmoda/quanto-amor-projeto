<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="hero-section">
      <v-col cols="12" md="6" class="d-flex flex-column justify-center pa-16">
        <h1 class="text-h2 font-weight-bold roboto">
          <span>PEQUENAS AÇÕES</span><br>
          <span class="text-success">GRANDES</span>
          <span> IMPACTOS</span>
        </h1>
        <p class="text-subtitle-1 mt-4 roboto">
          ADOTE A COLETA SELETIVA EM SUA ROTINA.
        </p>
        <p class="text-body-2 mt-2 roboto">
          ENCONTRE INFORMAÇÕES, DICAS E FERRAMENTAS PARA<br>
          FACILITAR A COLETA SELETIVA EM SEU DIA A DIA.
        </p>
        <div class="mt-6">
          <v-btn
            color="success"
            class="me-4 text-none roboto"
            rounded="pill"
            to="/coleta-seletiva"
          >
            Coleta Seletiva
          </v-btn>
          <v-btn
            color="success"
            class="text-none roboto"
            rounded="pill"
            variant="outlined"
            to="/pontos-coleta"
          >
            Pontos de Coleta
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="hero-image">
        <v-img
          src="/images/planeta_cidade.png"
          class="rounded-md"
          max-width="80%"
          contain
        ></v-img>
      </v-col>
    </v-row>

    <v-parallax
      src="/images/floresta_parallax.png"
      class="parallax-section"
    >
    </v-parallax>

    <v-row no-gutters class="project-section pa-16">
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-img
          src="/images/gaia_segurando_terra.png"
          max-width="200"
          contain
        />
      </v-col>
      <v-col cols="12" md="8" class="d-flex align-center">
        <p class="text-body-1 roboto">
          O PROJETO "QUANTO AMOR VOCÊ TEM PARA DAR", FUNDADO EM 2016, É UMA INICIATIVA DE EXTENSÃO 
          SOCIOAMBIENTAL DA UTFPR DE CORNÉLIO PROCÓPIO, QUE VISA COMBINAR SUSTENTABILIDADE, INCLUSÃO 
          SOCIAL E AÇÕES COMUNITÁRIAS
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

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

  margin: 0 auto;
  aspect-ratio: 1/1;
}
    
.parallax-section {
  height: 600px !important;
}

.parallax-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-section {
  background-color: #E8F5E9;
}

.roboto {
  font-family: 'Roboto', sans-serif !important;
  font-weight: 500;
}
</style>
