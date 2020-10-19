<template>
  <div class="fondo d-flex align-center">
    <v-row no-gutters class="d-flex justify-center">
      <v-col cols="12" md="4">
        <signIn />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import signIn from "@/components/SignIn.vue";
export default {
  name: "SignIn",

  components: {
    signIn,
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
