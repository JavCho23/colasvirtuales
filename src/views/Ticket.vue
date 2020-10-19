<template>
  <div class="fondo d-flex align-center">
    <v-row no-gutters class="d-flex justify-center">
      <v-col cols="12" md="4">
        <regTicket />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import regTicket from "@/components/RegTicket.vue";
export default {
  name: "Ticket",

  components: {
    regTicket,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.fondo {
  width: 100%;
  height: 100%;
}
</style>
