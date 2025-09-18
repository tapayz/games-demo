<template>
  <div id="footer">
    <img
      class="hidden-sm-and-down"
      src="/assets/art/blob-bottom-desktop.png"
      width="100%"
    >

    <v-footer
      class="text-grey bg-transparent px-0 px-md-6 text-center text-md-left"
      height="auto"
    >
      <v-row class="mx-0">
        <v-col
          cols="12"
          md="4"
        >
          <div class="text-h5 font-weight-bold text-primary mb-6 d-inline-flex align-center">
            <v-avatar
              class="mr-3"
            >
              <v-img
                :cover="false"
                src="/assets/logo-dark.png"
              />
            </v-avatar>
            CRYPTO Coin
          </div>

          <div class="subtitle-1 font-weight-light mb-6 hidden-sm-and-down">
            CRYPTO Coin is being developed by:<br>
            CRYPTO Coin Affiliates LLC (Fort Worth)<br>
            14315 John Doe Parkway<br>
            Texas
          </div>

          <div class="subtitle-1 font-weight-light mb-0 mb-md-8">
            <a
              class="text-grey"
              href="#"
            >Legal Notice</a>
            |
            <a
              class="text-grey"
              href="#"
            >Privacy Policy</a>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <div class="text-h5 font-weight-bold text-primary mb-6">
            Sitemap
          </div>
          <router-link
            class="text-h6 font-weight-light text-grey d-block mb-4"
            to="/about"
          >
            About
          </router-link>
          <a
            class="text-h6 font-weight-light text-grey d-block"
            href="#"
          >
            White Paper
          </a>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-row
            :dense="smAndDown"
            class="text-center"
          >
            <v-col
              v-for="(social, i) in socials"
              :key="i"
              class="mb-6 mb-md-12 text-center"
              cols="3"
            >
              <v-btn
                :size="smAndDown? '36': '46'"
                color="white rounded-circle"
              >
                <v-icon
                  :icon="social.icon"
                  color="primary"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script setup lang="ts">
  const { smAndDown } = useDisplay()

  const socials = ref([
    { icon: 'mdi-facebook', href: '#' },
    { icon: 'mdi-twitter', href: '#' },
    { icon: 'mdi-discord', href: '#' },
    { icon: 'mdi-send', href: '#' },
    { icon: 'mdi-reddit', href: '#' },
    { icon: 'mdi-bitcoin', href: '#' },
    { icon: 'mdi-youtube', href: '#' },
    { icon: '$vuetify', href: '#' },
  ])
</script>

<style lang="sass">
  #footer
    a
      text-decoration: none

    img
      position: absolute
      bottom: 0
      right: 0
      left: 0
      height: 500px
      opacity: .05

    @media screen and (min-width: 960px)
      margin-top: 200px
</style>
