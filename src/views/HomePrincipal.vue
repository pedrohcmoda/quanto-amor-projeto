<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="hero-section pa-md-16 pa-6">
      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <h1 class="text-h2 font-weight-bold">
          <span>PEQUENAS AÇÕES</span><br>
          <span class="text-success">GRANDES</span>
          <span> IMPACTOS</span>
        </h1>
        <p class="text-subtitle-1 mt-4">
          ADOTE A COLETA SELETIVA EM SUA ROTINA.
        </p>
        <p class="text-body-2 mt-2">
          ENCONTRE INFORMAÇÕES, DICAS E FERRAMENTAS PARA<br>
          FACILITAR A COLETA SELETIVA EM SEU DIA A DIA.
        </p>
        <div class="mt-6">
          <v-btn color="success" class="me-4 text-none" rounded="pill" to="/coleta-seletiva"
            aria-label="Saiba mais sobre Coleta Seletiva">
            Coleta Seletiva
          </v-btn>
          <v-btn color="success" class="text-none" rounded="pill" variant="outlined" to="/pontos-coleta"
            aria-label="Encontre Pontos de Coleta">
            Pontos de Coleta
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="hero-image">
        <v-img src="/images/protecao_ambiental.png" class="rounded-md" max-width="85%" />
      </v-col>
    </v-row>

    <v-parallax src="/images/floresta_parallax.png" class="parallax-section">
      <div class="parallax-overlay">
        <h2 class="text-white text-h4 font-weight-bold">Junte-se a nós na preservação do meio ambiente</h2>
      </div>
    </v-parallax>

    <v-row no-gutters class="project-section pa-md-16 pa-6">
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-img src="/images/gaia_segurando_terra.png" max-width="200" />
      </v-col>
      <v-col cols="12" md="8" class="d-flex align-center">
        <p class="text-body-1">
          O PROJETO "QUANTO AMOR VOCÊ TEM PARA DAR", FUNDADO EM 2016, É UMA INICIATIVA DE EXTENSÃO
          SOCIOAMBIENTAL DA UTFPR DE CORNÉLIO PROCÓPIO, QUE VISA COMBINAR SUSTENTABILIDADE, INCLUSÃO
          SOCIAL E AÇÕES COMUNITÁRIAS.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-section {
  min-height: 90vh;
  background-color: var(--bg-light);
}

.hero-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
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
  background-color: var(--bg-light);
}

:root {
  --bg-light: #E8F5E9;
}
</style>
