<template>
  <v-row class="justify-center">
    <PersonList title="Clientes" :persons="clients" />
    <PersonList title="Visitantes" :persons="guests" />
    <PersonList title="Preferencial" :persons="preference" />
  </v-row>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import PersonList from "@/components/PersonList.vue";

export default {
  name: "Home",
  components: {
    PersonList,
  },
  data() {
    return {
      clients: [],
      guests: [],
      preference: [],
    };
  },
  methods: {
    fetchQueues() {
      firebase
        .firestore()
        .collection("clients")
        .onSnapshot((snap) => {
          this.clients = [];
          snap.forEach((doc) => {
            this.clients.push({
              id: doc.id,
              ...doc.data(),
            });
          });
        });
      firebase
        .firestore()
        .collection("guests")
        .onSnapshot((snap) => {
          this.guests = [];
          snap.forEach((doc) => {
            this.guests.push({
              id: doc.id,
              ...doc.data(),
            });
          });
        });
      firebase
        .firestore()
        .collection("preference")
        .onSnapshot((snap) => {
          this.preference = [];
          snap.forEach((doc) => {
            this.preference.push({
              id: doc.id,
              ...doc.data(),
            });
          });
        });
    },
  },
  created() {
    this.fetchQueues();
  },
};
</script>
