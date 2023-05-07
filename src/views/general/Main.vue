<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed temporary app clipped>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-img
              contain
              height="40"
              alt="Licenciado Punk"
              class="shrink mr-2"
              transition="scale-transition"
              :src="require('@/assets/logo.png')"
            />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense nav>
        <v-list-item v-for="(item, i) in items" :key="i" link>
          <v-list-item-icon class="mr-3">
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="black" dense dark>
      <v-app-bar-nav-icon class="white--text" @click="drawer = true" />
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
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            class="full-height full-bg"
            :style="`background-image: url('${require('@/assets/img/bg1.jpg')}');`"
          >
            HOLA
          </v-col>
          <v-col cols="12">
            text
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            fin test
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app color="black" dark padless>
      <v-row dense>
        <v-col cols="12" class="text-center">
          <small
            v-text="`Copyright © ${new Date().getFullYear()}`"
            class="pr-1"
          />
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Principal",
          icon: "mdi-home",
          link: "main",
          visible: true,
        },
      ],
    };
  },
};
</script>

<style>
.full-height {
  height: 100vh;
}
.full-bg {
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
</style>