<template>
  <v-row class="justify-center">
    <PersonList v-for="entity in entities"  :key="entity.name" :title="entity.title" :entity="entity.name" />
    
  </v-row>
</template>

<script>
import PersonList from "@/components/PersonList.vue";

export default {
  name: "Home",
  components: {
    PersonList,
  },
  data() {
    return {
     entities:[ 
                {title:"Clientes",name:"clients"},
                {title:"Visitantes",name:"guests"},
                {title:"Preferencial",name:"preference"}
              ]
    };
  },
  methods: {
  },
};
</script>


