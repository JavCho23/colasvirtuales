<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h2>Holaaa</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
export default {
  name: "QueueList",

  data: () => ({
    clients: [],
  }),
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
    },
  },
  created() {
    this.fetchQueues();
  },
};
</script>
