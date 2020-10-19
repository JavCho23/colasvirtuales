<template>
  <v-card :class="isMobile ? 'pa-6' : 'pa-4'" flat>
    <v-card-title class="text d-flex justify-center" v-text="title" />
    <v-card-text class="px-0 pb-6 ">
      <v-text-field solo color="#015a90" label="Usuario"></v-text-field>
      <v-text-field
        solo
        color="#015a90"
        label="Contraseña"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        @click:append="show = !show"
      ></v-text-field>
    </v-card-text>
    <v-card-actions class="d-flex justify-center pa-0">
      <v-btn color="#ffac0e" width="100%" dark>
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
