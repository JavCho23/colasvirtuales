<template>
  <v-container>
  <v-row class="d-flex justify-center">
    <v-col cols="12" md="4">
        <signInComp />
    </v-col>
  </v-row>
  </v-container>
</template>
<script>
import signInComp from "@/components/SignInComp.vue";
export default {
  name: "SignIn",

  components: {
      signInComp
  },

  data: () => ({
    //
  }),
};
</script>
