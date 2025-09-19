<template>
  <div id="footer">
    <img
      class="hidden-sm-and-down"
      src="/assets/art/blob-bottom-desktop.png"
      width="100%"
    />

    <v-footer
      class="text-grey bg-transparent px-0 px-md-6 text-center text-md-left"
      height="auto"
    >
      <v-row class="mx-0">
        <v-col cols="12" md="4">
          <div class="subtitle-1 font-weight-light mb-6 hidden-sm-and-down">
            Tapayz is being developed by:<br />
            Tapayz
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script setup lang="ts">
const { smAndDown } = useDisplay();

const socials = ref([
  { icon: "mdi-facebook", href: "#" },
  { icon: "mdi-twitter", href: "#" },
  { icon: "mdi-discord", href: "#" },
  { icon: "mdi-send", href: "#" },
  { icon: "mdi-reddit", href: "#" },
  { icon: "mdi-bitcoin", href: "#" },
  { icon: "mdi-youtube", href: "#" },
  { icon: "$vuetify", href: "#" },
]);
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
    margin-top: 100px

  // Deposit 페이지에서 Footer 위치 조정
  body:has([id="deposit"]) &
    margin-top: 50px
</style>
