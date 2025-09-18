<template>
  <v-card :elevation="elevation">
    <slot />
  </v-card>
</template>

<script setup lang="ts">
  interface Props {
    elevation?: number | string
  }

  withDefaults(defineProps<Props>(), {
    elevation: 24,
  })
</script>
