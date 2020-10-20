<template>
  <v-app>
    <v-app-bar app color="primary" dark>
        <v-badge
          bordered
          bottom
          color="deep-purple accent-4"
          dot
          offset-x="10"
          offset-y="10"
        >
          <v-avatar size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
          </v-avatar>
        </v-badge>
        <v-toolbar-title> {{ title }} </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="text-capitalize" text rounded :icon="isMobile" to="/">
        <v-icon :left="!isMobile"> mdi-home</v-icon>
        <span v-if="!isMobile"> Inicio </span>
      </v-btn>
      <v-btn class="text-capitalize" text rounded :icon="isMobile" to="/ticket">
        <v-icon :left="!isMobile">mdi-ticket-account</v-icon>
        <span v-if="!isMobile"> Ticket </span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
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
        case "/ticket":
          title = "Sacar un ticket";
          break;
      }

      return title;
    },
  },
};
</script>
