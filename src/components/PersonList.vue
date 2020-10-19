<template>
  <v-col :cols="isMobile ? 16 : 4">
    <v-card class="my-2" flat>
      <v-card-title v-text="title" />
      <v-card-text v-for="person in persons" :key="person.id">
        <PersonItem :person="person" />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import PersonItem from "./PersonItem.vue";
export default {
  name: "PersonList",
  props: ["entity", "title"],
  data() {
    return {
      persons: [],
    };
  },
  methods: {
    fetchQueues() {
      firebase
        .firestore()
        .collection(this.entity)
        .onSnapshot((snap) => {
          this.persons = [];
          snap.forEach((doc) => {
            console.log(doc);
            this.persons.push({
              id: doc.id,
              ...doc.data(),
            });
          });
        });
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  created() {
    this.fetchQueues();
  },

  components: { PersonItem },
};
</script>
