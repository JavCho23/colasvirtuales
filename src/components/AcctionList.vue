<template>
  <v-col :cols="isMobile ? 12 : 7">
    <v-card class="pa-4">
      <v-card-text v-text="'Siguiente'" class="pa-0 mb-1" />
      <v-card-title
        v-text="'Fabián Andrés Pacherres B.'"
        class="d-flex justify-end pa-0"
      />
      <v-card-actions class="d-flex flex-wrap justify-end pa-0">
        <v-btn
          :class="isMobile ? 'my-3' : 'mt-3'"
          :width="isMobile ? '100%' : ''"
          v-text="'Confirmar atención'"
          color="#0060b0"
          dark
        />
        <v-btn
          :class="isMobile ? '' : 'mt-3'"
          :width="isMobile ? '100%' : ''"
          v-text="'Cancelar turno'"
          color="#ffb612"
          dark
        />
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "AcctionList",
  data() {
    return {};
  },
  methods: {},
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>
