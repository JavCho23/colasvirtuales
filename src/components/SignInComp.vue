<template>
  <v-card class="pa-4">
    <v-card-title class="d-flex justify-center">
      Iniciar sesion
    </v-card-title>
    <v-text-field 
            label="Usuario"
            placeholder="tugatita123"
    ></v-text-field>
     <v-text-field 
            label="Contraseña"
            placeholder="********"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
             @click:append="show = !show"
    ></v-text-field>
    <v-card-actions class="d-flex justify-center">
      <v-btn color="#ffac0e">
        Iniciar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        show: false,
      }
    },
  }
</script>