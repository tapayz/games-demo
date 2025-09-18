<template>
  <v-img
    :height="smAndDown ? '650' : 'auto'"
    max-width="100%"
    src="/assets/art/blob-top-min.png"
    style="position: absolute; top: 0; left: 0;"
    width="1300"
  />
</template>

<script setup lang="ts">
  const { smAndDown } = useDisplay()
</script>
