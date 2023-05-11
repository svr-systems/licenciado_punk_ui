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
              x-small
              icon
              :href="social_btn.url"
              target="_blank"
            >
              <v-img
                :src="require(`@/assets/img/social/${social_btn.icon}`)"
                max-height="24"
                max-width="24"
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
              <v-row class="white--text" align="center">
                <v-col cols="12" class="pt-8" />
                <v-col
                  v-if="!screenMobile"
                  cols="12"
                  sm="12"
                  md="5"
                  class="text-right"
                >
                  <span class="mx-5 c-title pointer" v-text="'Nosotros'" />
                  <span class="mx-5 c-title pointer" v-text="'Eventos'" />
                </v-col>
                <v-col cols="12" sm="12" md="2" class="text-center">
                  <img
                    :src="require('@/assets/logo.png')"
                    :width="
                      (!screenMobile
                        ? 90
                        : screenWidth > screenHeight
                        ? 18
                        : 70) + '%'
                    "
                  />
                </v-col>
                <v-col v-if="!screenMobile" cols="12" sm="12" md="5">
                  <span class="mx-5 c-title pointer" v-text="'Música'" />
                  <span class="mx-5 c-title pointer" v-text="'Tienda'" />
                </v-col>
                <v-col v-if="screenMobile" cols="12" class="text-center pt-0">
                  <span class="mx-5 c-title pointer" v-text="'Nosotros'" />
                  <br />
                  <span class="mx-5 c-title pointer" v-text="'Eventos'" />
                  <br />
                  <span class="mx-5 c-title pointer" v-text="'Música'" />
                  <br />
                  <span class="mx-5 c-title pointer" v-text="'Tienda'" />
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
          </v-row>

          <v-row class="py-5 my-5">
            <v-col cols="12" class="text-center">
              <h1>Nosotros</h1>
            </v-col>
            <v-col cols="12" sm="12" md="4" class="px-5">
              <p class="text-justify">
                Licenciado Punk es una banda formada en el año 2021, originaria
                del estado de Guanajuato México, la cual experimenta con
                diferentes géneros musicales tales como el Rock Alternativo,
                Grunge, Noise Rock y Rock Punk.
              </p>
            </v-col>
            <v-col cols="12" sm="12" md="4" class="px-5">
              <p class="text-justify">
                Su música busca tener la libertad de dejarlos hacer lo que les
                guste, siempre con esa chispa de mucha energía para entregarle
                al público una experiencia que deje marca para siempre; Así como
                con su show dinámico y lleno de sorpresas, siendo diferente en
                cada lugar al que van.
              </p>
            </v-col>
            <v-col cols="12" sm="12" md="4" class="px-5">
              <p class="text-justify">
                Actualmente se publicó el primer single titulado “Mezcal” que
                tiende a funcionar como el Demo del resto de obras compuestas
                por la banda que pretenden publicarse en las plataformas
                digitales a día de hoy.
              </p>
            </v-col>
          </v-row>

          <v-row class="py-5 my-5">
            <v-col
              v-for="(member, i) in members"
              :key="i"
              cols="12"
              sm="12"
              md="4"
              :style="`background-image: url('${require(`@/assets/${member.url}`)}');`"
              class="member member-img"
              v-if="!screenMobile || (screenMobile && member.mobile)"
            >
              <div
                v-if="member.name"
                class="member-text text-center white--text mx-5"
              >
                <span class="member-title" v-text="member.name" />
                <br />
                <span class="member-subtitle" v-text="member.instrument" />
              </div>
            </v-col>
          </v-row>

          <v-row justify="center" class="py-5 my-5">
            <v-col cols="12" class="text-center">
              <h1>Eventos</h1>
            </v-col>
            <v-col
              v-for="(show, i) in shows"
              :key="i"
              cols="12"
              sm="12"
              md="3"
              class="px-5 text-center pb-5"
            >
              <p>
                {{ show.name }}
                <br />
                <small> {{ show.date }} | {{ show.hour }} hrs. </small>
              </p>
              <div
                :style="`background-image: url('${require(`@/assets/${show.url}`)}');`"
                class="pointer show-img"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              class="white--text py-5 mt-5"
              style="background-color: #000"
            >
              <h1 class="text-center">Música</h1>
              <div>
                <v-tabs
                  v-model="tabs"
                  :show-arrows="false"
                  color="#E30E4F"
                  background-color="transparent"
                  dark
                >
                  <v-tab to="#1"><b>Pinwino</b></v-tab>
                  <v-tab to="#2"><b>Mezcal</b></v-tab>
                </v-tabs>
                <v-tabs-items v-model="tabs" id="custom-tab-items">
                  <v-tab-item value="1">
                    <p>
                      Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                      Morbi ac felis. Etiam feugiat lorem non metus. Sed a
                      libero.
                    </p>
                  </v-tab-item>
                  <v-tab-item value="2">
                    <p>
                      Nam ipsum risus, rutrum vitae, vestibulum eu, molestie
                      vel, lacus. Aenean tellus metus, bibendum sed, posuere ac,
                      mattis non, nunc. Aliquam lobortis. Aliquam lobortis.
                      Suspendisse non nisl sit amet velit hendrerit rutrum.
                    </p>
                  </v-tab-item>
                </v-tabs-items>
              </div>
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
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      drawer: false,
      screenMobile: false,
      screenWidth: 0,
      screenHeight: 0,
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
      members: [
        {
          url: "img/member/1.jpg",
          name: "Paco Greenwood",
          instrument: "Gtr. Eléctrica | Voz Coros",
          mobile: true,
        },
        {
          url: "img/member/2.jpg",
          name: "Chris Villa",
          instrument: "Batería",
          mobile: true,
        },
        {
          url: "img/member/3.jpg",
          name: "Said Ramos",
          instrument: "Gtr. Eléctrica",
          mobile: true,
        },
        {
          url: "img/member/4.jpg",
          name: "Dann Lara",
          instrument: "Voz Principal",
          mobile: true,
        },
        {
          url: "img/member/5.jpg",
          name: null,
          instrument: null,
          mobile: false,
        },
        {
          url: "img/member/6.jpg",
          name: "Sam Moretto",
          instrument: "Bajo Eléctrico | Voz Coros",
          mobile: true,
        },
      ],
      shows: [
        {
          name: "Quéretaro, Qro.",
          date: "2023-05-19",
          hour: "22:00",
          url: "img/shows/4.jpg",
          amount: 100,
          location: "https://goo.gl/maps/MjoDJmMvCD9G8YwH6",
          details: null,
          tickets: null,
        },
        {
          name: "Quéretaro, Qro.",
          date: "2023-04-22",
          hour: "21:00",
          url: "img/shows/3.jpg",
          amount: 100,
          location: "https://goo.gl/maps/MjoDJmMvCD9G8YwH6",
          details: null,
          tickets: null,
        },
        {
          name: "Celaya, Gto.",
          date: "2023-04-01",
          hour: "22:00",
          url: "img/shows/2.jpg",
          amount: 100,
          location: "https://goo.gl/maps/MjoDJmMvCD9G8YwH6",
          details: null,
          tickets: null,
        },
        {
          name: "Celaya, Gto.",
          date: "2023-02-25",
          hour: "20:30",
          url: "img/shows/1.jpg",
          amount: 100,
          location: "https://goo.gl/maps/MjoDJmMvCD9G8YwH6",
          details: null,
          tickets: null,
        },
      ],
      tabs: "1",
    };
  },

  methods: {
    isMobile: function () {
      const width = window.innerWidth;
      const height = window.innerHeight;
      return { width: width, height: height, mobile: width < 960 };
    },
    onResize() {
      this.screenMobile = this.isMobile().mobile;
      this.screenWidth = this.isMobile().width;
      this.screenHeight = this.isMobile().height;
    },
    numberFormat(v) {
      return Number(parseFloat(v).toFixed(2)).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },

  mounted() {
    this.onResize();

    window.onresize = () => {
      this.onResize();
    };
  },
};
</script>