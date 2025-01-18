<template>
  <v-app>
    <v-app-bar flat color="#E8F5E9" height="80">
      <v-container class="d-flex align-center px-6">
        <v-toolbar-title class="text-uppercase font-weight-medium">Quanto Amor Website</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="d-flex align-center">
          <v-btn variant="text" to="/coleta-seletiva" class="text-uppercase">Coleta Seletiva</v-btn>
          <v-btn variant="text" to="/pontos-coleta" class="text-uppercase">Pontos de Coleta</v-btn>
          <v-btn variant="text" to="/blog" class="text-uppercase">Blog</v-btn>
          <v-img src="/images/logo.png" max-width="50" class="ml-4"></v-img>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    
    <v-footer class="bg-background">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-img src="/images/quantoamor_logo_1.png" max-width="250" class="ml-5"></v-img>
          </v-col>
          <v-col cols="4">
            <h3>Como nos encontrar</h3>
            <v-list>
              <v-list-item prepend-icon="mdi-instagram">Instagram</v-list-item>
              <v-list-item prepend-icon="mdi-email">Email</v-list-item>
              <v-list-item prepend-icon="mdi-map-marker">Visite os coletores</v-list-item>
            </v-list>
          </v-col>
          <v-col cols="5">
            <h3>Área Restrita</h3>
            <v-text-field label="Nome do Usuário" variant="outlined" density="compact"></v-text-field>
            <v-text-field label="Senha" type="password" variant="outlined" density="compact"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import HomePrincipal from './views/HomePrincipal.vue'

export default {
  name: 'App',
  components: {
    HomePrincipal,
  },
  data: () => ({
    //
  }),
}
</script>