<template>
  <div class="fondo d-flex align-center">
    <v-row no-gutters class="d-flex justify-center">
      <v-col cols="12" md="4">
        <signInComp />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import signInComp from "@/components/SignInComp.vue";
export default {
  name: "SignIn",

  components: {
    signInComp,
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
