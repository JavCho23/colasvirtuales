<template>
  <v-card :class="isMobile ? 'pa-6' : 'pa-4'" :flat="isMobile ? true : false">
    <v-card-title class="text d-flex justify-center" v-text="title" />
    <v-text-field
      color="#015a90"
      label="Usuario"
      placeholder="tugatita123"
    ></v-text-field>
    <v-text-field
      color="#015a90"
      label="Contraseña"
      placeholder="********"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      @click:append="show = !show"
    ></v-text-field>
    <v-card-actions class="d-flex justify-center pa-0">
      <v-btn color="#ffac0e" width="100%">
        Iniciar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      title: "Iniciar Sesión",
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>
<style scoped>
.text {
  color: #015a90;
}
</style>
