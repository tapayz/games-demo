<template>
  <v-app>
    <v-main>
      <template v-if="route.name === '/'">
        <TopBlob />

        <!-- <LeftBlob /> -->

        <!-- <RightBlob /> -->
      </template>

      <Toolbar />

      <View />

      <Footer />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
