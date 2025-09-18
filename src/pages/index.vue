<template>
  <section id="home">
    <Hero />

    <VVideo />

    <Features />

    <Stack v-if="smAndUp" />

    <Guarantees />

    <Market />

    <StayInformed />
  </section>
</template>

<script setup lang="ts">
  const { smAndUp } = useDisplay()
</script>

  <style lang="sass">
    #home section
      padding: 32px 16px 96px

      @media screen and (max-width: 360px)
        padding: 32px 16px
  </style>
