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

    <v-card class="overflow-hidden" tile>
      <v-app-bar
        color="black"
        absolute
        dense
        dark
        inverted-scroll
        scroll-target="#main"
      >
        <v-app-bar-nav-icon class="white--text" @click="drawer = true" />
        <v-img
          class="mx-2"
          :src="require('@/assets/logo.png')"
          max-height="40"
          max-width="60"
          contain
        />
        <v-spacer />
        <v-tooltip v-for="(social_btn, i) in social_btns" :key="i" bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              class="mr-1"
              small
              icon
              :href="social_btn.url"
              target="_blank"
            >
              <v-img
                :src="require(`@/assets/img/social/${social_btn.icon}`)"
                max-height="28"
                max-width="28"
              />
            </v-btn>
          </template>
          <span v-text="social_btn.name" />
        </v-tooltip>
      </v-app-bar>
      <v-sheet id="main" class="overflow-y-auto full-height">
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              class="full-height full-bg"
              :style="`background-image: url('${require('@/assets/img/bg/1.jpg')}');`"
            >
              <v-row class="white--text mt-5" align="center">
                <v-col cols="12" sm="12" md="5" class="text-right">
                  <span class="mx-5 text-h5" v-text="'Nosotros'" />
                  <span class="mx-5 text-h5" v-text="'Fechas'" />
                </v-col>
                <v-col cols="12" sm="12" md="2" class="text-center">
                  <img :src="require('@/assets/logo.png')" height="120px" />
                </v-col>
                <v-col cols="12" sm="12" md="5">
                  <span class="mx-5 text-h5" v-text="'StagePlot'" />
                  <span class="mx-5 text-h5" v-text="'Contacto'" />
                </v-col>
                <v-col cols="12" class="text-center">
                  <v-tooltip
                    v-for="(social_btn, i) in social_btns"
                    :key="i"
                    bottom
                  >
                    <template v-slot:activator="{ on }">
                      <v-btn
                        v-on="on"
                        class="mx-1"
                        small
                        icon
                        :href="social_btn.url"
                        target="_blank"
                      >
                        <v-img
                          :src="
                            require(`@/assets/img/social/${social_btn.icon}`)
                          "
                          max-height="25"
                          max-width="25"
                        />
                      </v-btn>
                    </template>
                    <span v-text="social_btn.name" />
                  </v-tooltip>
                </v-col>
              </v-row>
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
      </v-sheet>
    </v-card>
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

    <!-- <v-app-bar app color="black" dense dark>
      <v-app-bar-nav-icon class="white--text" @click="drawer = true" />
      <v-img
        class="mx-2"
        :src="require('@/assets/logo.png')"
        max-height="40"
        max-width="60"
        contain
      />
      <v-spacer />
      <v-tooltip v-for="(social_btn, i) in social_btns" :key="i" bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            class="mr-1"
            small
            icon
            :href="social_btn.url"
            target="_blank"
          >
            <v-img
              :src="require(`@/assets/img/social/${social_btn.icon}`)"
              max-height="28"
              max-width="28"
            />
          </v-btn>
        </template>
        <span v-text="social_btn.name" />
      </v-tooltip>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            class="full-height full-bg"
            :style="`background-image: url('${require('@/assets/img/bg/1.jpg')}');`"
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
    </v-footer> -->
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
      social_btns: [
        {
          name: "Instagram",
          icon: "ig.svg",
          url: "https://www.instagram.com/licenciadopunk/",
        },
        {
          name: "Youtube",
          icon: "yt.svg",
          url: "https://www.youtube.com/channel/UCCQb24WxAC2wpMVrMHgJbeQ",
        },
        {
          name: "TikTok",
          icon: "tt.svg",
          url: "https://www.tiktok.com/@licenciadopunk",
        },
        {
          name: "Facebook",
          icon: "fb.svg",
          url: "https://www.facebook.com/Licenciado-Punk-101402515910552",
        },
        {
          name: "Twitter",
          icon: "tw.svg",
          url: "https://twitter.com/LicenciadoPunk",
        },
        {
          name: "WhatsApp",
          icon: "wa.svg",
          url: "https://wa.me/524611292699?text=Hola,%20somos%20Licenciado%20Punk!!!,%20¿qué%20podemos%20hacer%20por%20ti?",
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