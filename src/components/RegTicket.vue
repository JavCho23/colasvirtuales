<template>
    <v-form
        :class="isMobile ? 'pa-6' : 'pa-4'" :flat="isMobile ? true : false"
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-card-title class="text d-flex justify-center" v-text="title" />
        <v-text-field
            color="#015a90"
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
        ></v-text-field>

        <v-text-field
            color="#015a90"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>

        <v-text-field
            color="#015a90"
            v-model="number"
            :counter="9"
            :rules="numberRules"
            label="Cell phone"
            required
        ></v-text-field>
        
        <v-checkbox
            color="#015a90"
            v-model="checkbox"
            :rules="checkRules"
            label="Do you agree?"
            required
        ></v-checkbox>

        <v-btn
            :disabled="!valid"
            class="mr-6"
            @click="validate"
            color="#0060b0"
        >
            Validar
        </v-btn>

        <v-btn
            class="mr-6"
            @click="reset"
            color="#ffb612" 
        >
            Limpiar
        </v-btn>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            title: "Sacar Ticket",
            valid: true,
            email: '',
            emailRules: [
                v => !!v || 'E-mail es requerido',
                v => /.+@.+\..+/.test(v) || 'E-mail no es válido',
            ],
            number: '',
            numberRules: [
                v => !!v || 'El número es requerido',
                v => (v && v.length == 9) || 'Número incorrecto',
            ],
            checkbox: false,
        };
    },

    computed: {
        isMobile() {
            return this.$vuetify.breakpoint.smAndDown;
        },
    },

    methods: {
        validate () {
            this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        }
    },
};
</script>

<style scoped>
.text {
    color: #015a90;
}
</style>