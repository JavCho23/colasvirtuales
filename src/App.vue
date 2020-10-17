<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title> {{Título}} </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn class="text-capitalize" text rounded :icon="isMobile" to="/">
        <v-icon :left="!isMobile"> mdi-home</v-icon>
        <span v-if="!isMobile"> Inicio </span>
      </v-btn>
      <v-btn
        class="text-capitalize"
        text
        rounded
        :icon="isMobile"
        to="/tickets"
      >
        <v-icon :left="!isMobile">mdi-ticket-account</v-icon>
        <span v-if="!isMobile"> Ticket </span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    title() {
      let title;

      switch (this.$route.path) {
        case "/":
          title = "Colas";
          break;
        case "/tickets":
          title = "Sacar un ticket";
          break;
      }

      return title;
    },
  },
};
</script>
