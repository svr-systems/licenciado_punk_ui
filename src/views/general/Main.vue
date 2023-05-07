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
                <v-col
                  v-if="!isMobile()"
                  cols="12"
                  sm="12"
                  md="5"
                  class="text-right"
                >
                  <span class="mx-5 text-h5" v-text="'Nosotros'" />
                  <span class="mx-5 text-h5" v-text="'Fechas'" />
                </v-col>
                <v-col cols="12" sm="12" md="2" class="text-center">
                  <img :src="require('@/assets/logo.png')" height="120px" />
                </v-col>
                <v-col v-if="!isMobile()" cols="12" sm="12" md="5">
                  <span class="mx-5 text-h5" v-text="'StagePlot'" />
                  <span class="mx-5 text-h5" v-text="'Contacto'" />
                </v-col>
                <v-col v-if="isMobile()" cols="12" class="text-center">
                  <span class="text-h6" v-text="'Nosotros'" />
                  <br />
                  <span class="text-h6" v-text="'Fechas'" />
                  <br />
                  <span class="text-h6" v-text="'StagePlot'" />
                  <br />
                  <span class="text-h6" v-text="'Contacto'" />
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
  methods: {
    isMobile: function () {
      var check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
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