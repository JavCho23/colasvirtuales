<template>
  <div>
    <v-row>
      <v-col cols="12" class="text-center">
        <span v-text="'Mantenimiento del Personal'" class="title" />
      </v-col>
      <v-col
        cols="12"
        :class="isMobile ? '' : 'd-flex justify-space-between align-center'"
      >
        <div class="text">
          <v-text-field
            solo
            v-model="newEmployee"
            label="Ingresar trabajador"
            hide-details
          ></v-text-field>
        </div>
        <v-btn color="#0060b0" dark @click="registrar()">
          Registrar
        </v-btn>
        <v-btn color="#ffb612" dark @click="cancelar()">
          Cancelar
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-divider class="mt-4" />
      </v-col>
      <v-col cols="12">
        <v-list>
          <v-list-item v-for="(employee, i) in employees" :key="i">
            <v-icon v-text="'mdi-account'" class="mr-4" />
            <v-list-item-title v-text="employee.name"></v-list-item-title>
            <v-spacer></v-spacer>
            <div class="d-flex">
              <v-btn icon>
                <v-icon
                  color="#0060b0"
                  v-text="'mdi-close'"
                  @click="eliminar(i)"
                />
              </v-btn>
              <v-btn icon>
                <v-icon
                  color="#ffb612"
                  v-text="'mdi-pencil'"
                  @click="dialog(i)"
                />
              </v-btn>
            </div>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-dialog v-model="confirmDialog" width="40%">
      <v-card class="pa-4">
        <v-text-field
          solo
          label="Editar Nombre"
          v-model="editEmployee"
          hide-details
          class="pb-4"
        ></v-text-field>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn @click="editar()">
            Editar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newEmployee: "",
      employees: [
        { name: "Javier ArturoChávez Sialer" },
        { name: "José Maico Guevara Pariatanta" },
        { name: "Janina Alexa Terrores Espino" },
        { name: "Fabián Andrés Pacherres Bautista" },
        { name: "Marcelo Velásquez Villar" },
        { name: "Jair Vidaurre Santisteban" },
      ],
      confirmDialog: false,
      editEmployee: "",
      indexAux: 0,
    };
  },
  methods: {
    registrar() {
      this.employees.push({ name: this.newEmployee });
      this.newEmployee = "";
    },
    eliminar(i) {
      this.employees.splice(i, 1);
    },
    cancelar() {
      this.newEmployee = "";
    },
    dialog(i) {
      this.confirmDialog = true;
      this.indexAux = i;
    },
    editar() {
      this.employees[this.indexAux].name = this.editEmployee;
      this.confirmDialog = false;
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>
<style scoped>
.text {
  width: 70%;
}
</style>
