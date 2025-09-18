<template>
  <v-container
    id="video"
    class="px-3"
    tag="section"
  >
    <Subheading
      class="mb-12"
      subtitle="Sit back and enjoy."
      title="CRYPTO in 60 Seconds"
    />

    <Card
      class="mx-auto"
      height="400"
      max-width="800"
    >
      <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameborder="0"
        height="100%"
        src="https://www.youtube.com/embed/IWeCQkIJNkY"
        width="100%"
        allowfullscreen
      />
    </Card>
  </v-container>
</template>

<script setup lang="ts">
  //
</script>
