<template>
  <v-app>
    <SideBar :drawer.sync="drawer" />

    <v-app-bar app color="black" dense dark>
      <v-toolbar-title class="mx-2">Nosotros</v-toolbar-title>
      <v-toolbar-title class="mx-2">Fechas</v-toolbar-title>
      <v-toolbar-title class="mx-2"></v-toolbar-title>
      <v-spacer />

      <div class="d-flex align-center">
        <v-img
          :src="require('@/assets/logo.png')"
          max-height="40px"
          class="my-1"
          contain
        />
      </div>
      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app padless>
      <v-row dense>
        <v-col cols="12" class="text-center">
          <small v-text="version" class="pr-1" />
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    SideBar,
  },

  data() {
    return {
      drawer: false,
      title: "Licenciado Punk",
      version: "Versión 1.23.00.00",
    };
  },

  methods: {},
};
</script>