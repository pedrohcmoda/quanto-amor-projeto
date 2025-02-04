<template>
  <div class="cep-busca">
    <h2 class="text-center text-h5 mb-8 roboto">DIGITE O CEP DO SEU BAIRRO:</h2>
    
    <v-form @submit.prevent="buscarCep" class="px-4">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="cep"
            label="CEP"
            variant="outlined"
            v-mask="'#####-###'"
            placeholder="_____-___"
            bg-color="white"
            class="mb-4"
            :rules="[rules.required, rules.cep]"
            dense
          ></v-text-field>

          <v-text-field
            v-model="bairro"
            label="BAIRRO"
            variant="outlined"
            bg-color="white"
            class="mb-4"
            readonly
            dense
          ></v-text-field>

          <v-select
            v-model="diasColeta"
            label="DIAS DA SEMANA"
            :items="diasColetaOpcoes"
            variant="outlined"
            bg-color="white"
            class="mb-4"
            readonly
            dense
          ></v-select>

          <v-select
            v-model="tipoColeta"
            label="TIPO DE COLETA"
            :items="tipoColetaOpcoes"
            variant="outlined"
            bg-color="white"
            class="mb-6"
            readonly
            dense
          ></v-select>
        </v-col>
      </v-row>

      <div class="text-center">
        <v-btn
          type="submit"
          color="success"
          size="large"
          rounded
          class="search-btn"
          min-width="200"
          :loading="loading"
        >
          BUSCAR
        </v-btn>
      </div>
    </v-form>

    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      timeout="3000"
      location="top"
    >
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mask } from 'vue-the-mask'

const cep = ref('')
const bairro = ref('')
const diasColeta = ref(null)
const tipoColeta = ref(null)
const loading = ref(false)

const diasColetaOpcoes = ['Segunda e Quinta', 'Terça e Sexta', 'Quarta e Sábado']
const tipoColetaOpcoes = ['Orgânico', 'Reciclável']

const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')

const rules = {
  required: v => !!v || 'Campo obrigatório',
  cep: v => /^\d{5}-\d{3}$/.test(v) || 'CEP inválido'
}

const buscarCep = async () => {
  if (!cep.value) return

  loading.value = true
  try {
    const cepLimpo = cep.value.replace(/\D/g, '')

    const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
    const data = await response.json()

    if (data.erro) {
      throw new Error('CEP não encontrado')
    }

    const bairroEncontrado = buscarBairroPorCep(cepLimpo)

    if (bairroEncontrado) {
      bairro.value = data.bairro
      diasColeta.value = bairroEncontrado.diasColeta
      tipoColeta.value = bairroEncontrado.tipoColeta

      snackbarColor.value = 'success'
      snackbarText.value = 'Informações encontradas com sucesso!'
    } else {
      throw new Error('Bairro não atendido pela coleta seletiva')
    }

  } catch (error) {
    snackbarColor.value = 'error'
    snackbarText.value = error.message

    bairro.value = ''
    diasColeta.value = null
    tipoColeta.value = null
  } finally {
    loading.value = false
    snackbar.value = true
  }
}

const buscarBairroPorCep = (cep) => {
  const bairrosDB = {
    '86300000': {
      diasColeta: 'Segunda e Quinta',
      tipoColeta: 'Reciclável'
    }
  }

  return bairrosDB[cep]
}
</script>

<style scoped>
.cep-busca {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.roboto {
  font-family: 'Roboto', sans-serif !important;
  font-weight: 500;
}

:deep(.v-field) {
  border-radius: 12px !important;
}

:deep(.v-text-field .v-field__input) {
  min-height: 48px;
  padding-top: 0;
}

.search-btn {
  transition: background-color 0.2s ease;
}

.search-btn:hover {
  background-color: #388e3c;
}

.v-btn[loading] {
  background-color: #4caf50 !important;
}

.v-snackbar {
  border-radius: 8px;
}

.v-snackbar.success {
  background-color: #4caf50;
}

.v-snackbar.error {
  background-color: #f44336;
}
</style>
