<template>
  <Card
    class="mx-auto"
    height="600"
    max-width="100%"
    width="300"
  >
    <v-img
      :src="src"
      height="100%"
      cover
    />
  </Card>
</template>

<script setup lang="ts">
  interface Props {
    src: string
  }

  defineProps<Props>()
</script>
