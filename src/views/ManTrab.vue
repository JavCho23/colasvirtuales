<template>
  <div class="fondo d-flex align-center">
    <v-row no-gutters class="d-flex justify-center">
      <v-col cols="12" md="8">
        <Mantrabcomp />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Mantrabcomp from "@/components/Mantrabcomp.vue";
export default {
  name: "Mantrab",

  components: {
    Mantrabcomp,
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