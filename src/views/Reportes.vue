<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >
      <v-spacer></v-spacer>
    </v-system-bar>

    <v-app-bar
      dark
      color="#ffac0e"
    >
      <v-toolbar-title>Personas atendidas por trabajador</v-toolbar-title>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#000"
            dark
          >
            <v-card-title class="headline">
              Janina Alexa 
            </v-card-title>

            <v-card-subtitle>---</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
             ----
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.artist === 'Ellie Goulding'"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>

                  <v-btn
                    v-else
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    ---
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#ffac0e',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Maico Guevara',
          artist: 'Retiros',
        },
        {
          color: '#ffac0e',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Janet LAlopu',
          artist: 'Depósito',
        },
      ],
    }),
  }
</script>