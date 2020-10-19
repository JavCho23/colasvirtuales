<template>
  <div class="fondo d-flex align-center">
    <v-row no-gutters class="d-flex justify-center">
      <v-col cols="12" md="10">
        <CrudUser />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import CrudUser from "@/components/CrudUser.vue";
export default {
  name: "Mantrab",

  components: {
    CrudUser,
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