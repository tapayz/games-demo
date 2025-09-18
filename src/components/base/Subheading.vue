<template>
  <div
    :class="`text-${left ? 'left' : right ? 'right' : 'center'}`"
    class="subheading"
  >
    <component
      :is="tag"
      :class="mdAndUp ? 'text-h3' : 'text-h4'"
      class="font-weight-bold mb-6"
    >{{ title }}</component>
    <div
      :class="mdAndUp ? 'text-h5' : 'text-h6'"
      class="font-weight-light"
    >{{ subtitle }}</div>
  </div>
</template>

<script setup lang="ts">

  interface Props {
    left?: boolean
    right?: boolean
    tag?: string
    title?: string
    subtitle?: string
  }

  const { mdAndUp } = useDisplay()

  withDefaults(defineProps<Props>(), {
    left: false,
    right: false,
    tag: 'h2',
    title: '',
    subtitle: '',
  })
</script>

<style lang="sass">
  .subheading
    margin: 0 auto
    max-width: 500px
</style>
