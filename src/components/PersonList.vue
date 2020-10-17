<template>
  <v-col cols="11" md="4">
    <v-row>
      <v-col
        ><h3>{{ title }}</h3></v-col
      >
    </v-row>
    <v-row>
      <v-col cols="12" v-for="person in persons" :key="person.id">
        <PersonItem :person="person" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import PersonItem from "./PersonItem.vue";
export default {
  name: "PersonList",
  props: ["entity", "title"],
  data(){
    return{
      persons: []
    }
  },
  methods:{
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
    }
  },
  created(){
    this.fetchQueues();
  },

  components: { PersonItem },
};
</script>
