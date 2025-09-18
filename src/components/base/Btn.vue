<template>
  <v-btn
    :color="mdAndUp ? 'primary' : 'white'"
    :elevation="elevation"
    :fab="smAndDown"
    :theme="dark ? 'dark': 'light'"
  >
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
  const { mdAndUp, smAndDown } = useDisplay()

  interface Props {
    alt?: boolean
    dark?: boolean
    elevation?: number | string
  }

  withDefaults(defineProps<Props>(), {
    alt: false,
    dark: false,
    elevation: 6,
  })
</script>
