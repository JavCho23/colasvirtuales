<template>
  <v-card flat class="pa-2">
    <v-card-title class="text d-flex justify-center" v-text="title" />
    <v-card-text class="px-0 pb-6">
      <v-container
        id="my-time"
        class="text d-flex right"
      >
      </v-container>

      <v-text-field
        solo
        v-model="name"
        :rules="[rules.required]"
        label="Nombre"
      ></v-text-field>

      <v-text-field
        solo
        v-model="email"
        :rules="[rules.required, rules.email]"
        label="Correo electrónico"
      ></v-text-field>

      <v-text-field
        solo
        v-model="number"
        :rules="[rules.required, rules.counter]"
        label="N° telefónico"
        counter
        maxlength="9"
      ></v-text-field>

      <v-text-field
        solo
        v-model="date"
        type="date"
      ></v-text-field>

      <v-text-field
        solo
        v-model="time"
        type="time"
      ></v-text-field>
    </v-card-text>

    <v-card-actions class="pa-0">
      <v-btn color="#0060b0" width="48%" dark>
        Confirmar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="#ffb612" width="48%" dark @click="cancelar()">
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
        date: "",
        time: "",

        show: false,
        checkbox: false,
        valid: true,

        rules: {
          required: (value) => !!value || "Obligatorio",
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

    methods: {
      cancelar() {
        this.name = "";
        this.email = "";
        this.number = "";
        this.date = "";
        this.time = "";
        this.rules.required = false;
      },
    },
  };

  setInterval(function(){
    let dateInstance = new Date();
    let hour = dateInstance.getHours();
    let minute = dateInstance.getMinutes();

    let days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    let day = days[dateInstance.getDay()];
    let today = dateInstance.getDate();
    let month = months[dateInstance.getMonth()];
    let fullYear = dateInstance.getFullYear();

    document.getElementById('my-time').textContent = day + ', ' + today + ' ' + month + ' ' + fullYear + ' ' + hour + ':' + minute;
  }, 1000);
</script>

<style scoped>
.text {
  color: #015a90;
}
</style>
