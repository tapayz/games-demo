<template>
  <v-toolbar
    id="core-toolbar"
    color="transparent"
    height="128"
    variant="flat"
  >
    <v-toolbar-title class="text-h4 font-weight-black d-inline-flex px-0 px-md-8 align-center">
      <RouterLink
        :class="route.name !== '/' ? 'text-primary' : 'text-white'"
        to="/"
      >
        <v-avatar
          class="mr-3"
          size="48"
          tile
        >
          <v-img
            :cover="false"
            :src="route.name !== '/' ? '/assets/logo-dark.png' : '/assets/logo.png'"
          />
        </v-avatar>

        <span class="hidden-sm-and-down">
          CRYPTO&nbsp;<span class="font-weight-light">Coin</span>
        </span>
      </RouterLink>
    </v-toolbar-title>

    <v-spacer />

    <v-btn
      :icon="smAndDown"
      :theme="smAndDown? 'dark': 'light'"
      class="mr-3"
      size="x-large"
      to="/about"
      variant="text"
    >
      <span v-if="mdAndUp">
        About
      </span>

      <v-icon v-else>
        mdi-information
      </v-icon>
    </v-btn>

    <v-btn
      :icon="smAndDown"
      :theme="smAndDown? 'dark': 'light'"
      class="mr-3"
      size="x-large"
      variant="text"
    >
      <span v-if="mdAndUp">
        White Paper
      </span>

      <v-icon v-else>
        mdi-file
      </v-icon>
    </v-btn>

    <Btn
      :min-height="mdAndUp ? 64 : undefined"
      :min-width="mdAndUp ? 175 : undefined"
      class="mr-3 bg-primary"
      color="white"
      height="64"
    >
      <span v-if="mdAndUp">
        Download
      </span>

      <v-icon
        v-else
        color="primary"
      >
        mdi-cloud-download
      </v-icon>
    </Btn>
  </v-toolbar>
</template>

<script setup lang="ts">
  const { mdAndUp, smAndDown } = useDisplay()
  const route = useRoute()
</script>

<style lang="sass">
  #core-toolbar
    a
      text-decoration: none
</style>
