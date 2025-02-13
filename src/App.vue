<template>
  <v-app>
    <v-app-bar flat color="#E8F5E9" height="80">
      <v-container class="d-flex align-center px-6">
        <v-btn variant="text" to="/" class="text-uppercase text-primary font-weight-bold mx-3"
          aria-label="Página Inicial">
          Quanto Amor Você Tem Para Dar?
        </v-btn>

        <v-spacer></v-spacer>

        <div class="d-flex align-center">
          <v-btn variant="text" to="/coleta-seletiva" class="text-uppercase mx-2">Coleta Seletiva</v-btn>
          <v-btn variant="text" to="/pontos-coleta" class="text-uppercase mx-2">Pontos de Coleta</v-btn>
          <v-btn variant="text" to="/blog" class="text-uppercase mx-2">Blog</v-btn>
          <v-img src="/images/logo.png" max-width="50" class="ml-6"></v-img>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer class="bg-background">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="3" class="d-flex justify-center">
            <v-img src="/images/quantoamor_logo_1.png" max-width="200"></v-img>
          </v-col>

          <v-col cols="12" md="4">
            <h3 class="text-h6 font-weight-bold">Como nos encontrar</h3>
            <v-list dense>
              <v-list-item>
                <a href="https://www.instagram.com/quantoamorvocetemparadar/" target="_blank" class="icon-link">
                  <v-icon class="mr-2">mdi-instagram</v-icon>
                  <span>Instagram</span>
                </a>
              </v-list-item>
              <v-list-item>
                <a href="mailto:quantoamorvocetemparadar@gmail.com" class="icon-link">
                  <v-icon class="mr-2">mdi-email</v-icon>
                  <span>Email</span>
                </a>
              </v-list-item>
              <v-list-item>
                <a href="https://maps.app.goo.gl/bhVmxxnK9AoTMQn39" target="_blank" class="icon-link">
                  <v-icon class="mr-2">mdi-map-marker</v-icon>
                  <span>Visite os coletores</span>
                </a>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col cols="12" md="5">
            <h3 class="text-h6 font-weight-bold">Área Restrita</h3>
            <v-text-field label="Nome do Usuário" variant="outlined" density="compact" class="mt-2"
              v-model="username"></v-text-field>
            <v-text-field label="Senha" type="password" variant="outlined" density="compact" class="mt-2"
              v-model="password"></v-text-field>
            <v-btn color="success" class="mt-3" block @click="handleLogin">Entrar</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import HomePrincipal from './views/HomePrincipal.vue'
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from '@/db/firebaseConfig';

export default {
  name: 'App',
  components: {
    HomePrincipal,
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      const email = this.username;
      const password = this.password;
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          this.$router.push('/admin');
        })
        .catch((error) => {
          alert('Erro ao fazer login: ' + error.message);
        });
    
      this.username = '';
      this.password = '';
    }
  }
}
</script>

<style scoped>
:root {
  --bg-light: #E8F5E9;
}

.bg-background {
  background-color: var(--bg-light);
}

.text-primary {
  color: #2E7D32 !important;
}

.icon-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
}

.icon-link span {
  transition: text-decoration 0.2s ease;
}

.icon-link:hover span {
  text-decoration: underline;
}

.icon-link v-icon {
  transition: transform 0.2s ease;
}

.icon-link:hover v-icon {
  transform: scale(1.1);
}
</style>
