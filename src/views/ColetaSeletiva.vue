// src/views/ColetaSeletiva.vue
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h4 text-center mb-6">CENTRO</h2>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card color="primary" class="text-center">
          <v-card-title>RECICLÁVEL</v-card-title>
          <v-card-text class="text-white">
            <div>SEGUNDA-FEIRA</div>
            <div>QUINTA-FEIRA</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card color="primary" class="text-center">
          <v-card-title>ORGÂNICO</v-card-title>
          <v-card-text class="text-white">
            <div>TERÇA-FEIRA</div>
            <div>SEXTA-FEIRA</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="12" md="6" offset-md="3">
        <v-form>
          <v-text-field label="CEP" variant="outlined"></v-text-field>
          <v-text-field label="BAIRRO" variant="outlined"></v-text-field>
          <v-select
            label="DIAS DA SEMANA"
            variant="outlined"
            :items="['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira']"
          ></v-select>
          <v-select
            label="TIPO DE COLETA"
            variant="outlined"
            :items="['RECICLÁVEL', 'ORGÂNICO']"
          ></v-select>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
