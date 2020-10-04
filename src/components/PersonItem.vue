<template>
  <v-card color="white">
    <v-card-text>
      <v-row no-gutters>
        <v-col>
          <v-list-item-title class="title" v-text="person.name" />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-icon left> mdi-account-box-outline </v-icon>
          {{ person.dni }}</v-col
        >
        <v-col>
          <v-icon left> mdi-cellphone </v-icon>
          {{ person.phone }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
};
</script>
