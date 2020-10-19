<template>
  <v-card color="white" class="pa-4">
    <v-card-title class="pa-0">
      <v-list-item-title v-text="person.name" />
    </v-card-title>
    <v-card-text class="pa-0">
      <v-row no-gutters>
        <v-col class="d-flex align-center">
          <v-icon v-text="'mdi-account-box-outline'" />
          <v-list-item-subtitle v-text="person.dni" class="pl-2" />
        </v-col>
        <v-col class="d-flex align-center">
          <v-icon v-text="'mdi-cellphone'" />
          <v-list-item-subtitle v-text="person.phone" class="pl-2" />
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
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>
