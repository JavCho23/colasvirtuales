<template>
  <div class="fondo d-flex align-center">
    <v-row no-gutters class="d-flex justify-center">
      <v-col cols="12" md="4">
        <Reportescomp />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Reportescomp from "@/components/Reportescomp.vue";
export default {
  name: "Reportes",

  components: {
    Reportescomp,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.fondo {
  width: 100%;
  height: 100%;
}
</style>