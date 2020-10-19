<template>
  <v-row>
    <v-col :cols="isMobile ? '12' : '10'">
      <v-row class="d-flex justify-end">
        <v-col :cols="isMobile ? '12' : '3'">
          <v-select
            :items="items"
            label="Ventanilla"
            hide-details
            class="px-3"
          />
        </v-col>
        <AcctionList />
      </v-row>
    </v-col>
    <v-col cols="12" class="pt-0">
      <v-row no-gutters>
        <v-col cols="12" class="title text-center">
          <span v-text="'Próximas Personas'" />
          <v-divider class="mt-4" />
        </v-col>
        <PersonList
          v-for="entity in entities"
          :key="entity.name"
          :title="entity.title"
          :entity="entity.name"
        />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import PersonList from "@/components/PersonList.vue";
import AcctionList from "@/components/AcctionList.vue";

export default {
  name: "Home",
  components: {
    PersonList,
    AcctionList,
  },
  data() {
    return {
      entities: [
        { title: "Clientes", name: "clients" },
        { title: "Visitantes", name: "guests" },
        { title: "Preferencial", name: "preference" },
      ],
      items: ["Ventanilla 1", "Ventanilla 2"],
    };
  },
  methods: {},
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>
