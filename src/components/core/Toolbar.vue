<template>
  <v-toolbar id="core-toolbar" color="transparent" height="98" variant="flat">
    <v-toolbar-title
      class="text-h4 font-weight-black d-inline-flex px-0 px-md-8 align-center"
    >
      <RouterLink
        :class="route.name !== '/' ? 'text-primary' : 'text-white'"
        to="/"
      >
        <v-avatar class="mr-3" size="120">
          <v-img :cover="false" src="/assets/logo-blue.jpg" />
        </v-avatar>

        <span class="hidden-sm-and-down"> Games Demo </span>
      </RouterLink>
    </v-toolbar-title>

    <v-btn
      :icon="smAndDown"
      :theme="smAndDown ? 'dark' : 'light'"
      class="mr-3"
      size="x-large"
      variant="text"
      @click="router.push('/deposit')"
    >
      <span v-if="mdAndUp"> Deposit </span>

      <v-icon color="#5278ff" v-else> mdi-cash-plus </v-icon>
    </v-btn>

    <v-btn
      :icon="smAndDown"
      :theme="smAndDown ? 'dark' : 'light'"
      class="mr-5"
      size="x-large"
      variant="text"
    >
      <span v-if="mdAndUp"> Withdrawal </span>

      <v-icon color="#e95252" v-else> mdi-cash-minus </v-icon>
    </v-btn>

    <span>tapadmin </span>
    <v-btn>
      <v-avatar :size="24">
        <v-icon>mdi-account</v-icon>
      </v-avatar>
    </v-btn>
  </v-toolbar>
</template>

<script setup lang="ts">
const { mdAndUp, smAndDown } = useDisplay();
const route = useRoute();
const router = useRouter();
</script>

<style lang="sass">
#core-toolbar
  a
    text-decoration: none
</style>
