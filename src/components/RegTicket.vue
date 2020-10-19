<template>
  <v-card flat class="pa-2">
    <v-card-title class="text d-flex justify-center" v-text="title" />
    <v-card-text class="px-0 pb-6">
      <v-text-field
      solo
        v-model="name"
        label="Name"
        color="#015a90"
        :rules="[rules.required]"
      ></v-text-field>

      <v-text-field
      solo
        color="#015a90"
        v-model="email"
        :rules="[rules.required, rules.email]"
        label="E-mail"
      ></v-text-field>

      <v-text-field
      solo
        v-model="number"
        label="Cell phone"
        color="#015a90"
        :rules="[rules.required, rules.counter]"
        counter
        maxlength="9"
      ></v-text-field>
    </v-card-text>

    <v-card-actions class="pa-0">
      <v-btn color="#0060b0" width="48%" dark>
        Confirmar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="#ffb612" width="48%" dark>
        Cancelar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: "Sacar Ticket",

      name: "",
      email: "",
      number: "",

      show: false,
      checkbox: false,
      valid: true,

      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length <= 9 || "9 números",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },

  methods: {},
};
</script>

<style scoped>
.text {
  color: #015a90;
}
</style>
