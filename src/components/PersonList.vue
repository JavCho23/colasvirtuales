<template>
  <v-col cols="11" md="4">
    <v-row>
      <v-col
        ><h3>{{ title }}</h3></v-col
      >
    </v-row>
    <v-row>
      <v-col v-for="person in persons" :key="person.id">
        <PersonItem :person="person" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import PersonItem from "./PersonItem.vue";
export default {
  name: "PersonList",
  props: ["persons", "title"],
  components: { PersonItem },
};
</script>
