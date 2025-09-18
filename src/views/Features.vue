<template>
  <v-container
    id="features"
    tag="section"
  >
    <Subheading
      class="mb-12"
      subtitle="Blockchain made simple."
      title="Your New Home"
    />

    <v-row align="center">
      <v-col
        cols="12"
        md="6"
      >
        <Subheading
          :left="mdAndUp"
          subtitle="We calculate the best gas price upon order purchase. Just click Send."
          title="Premium Transactions"
        />
      </v-col>

      <v-col>
        <ImgCard src="/assets/features/2.jpg" />
      </v-col>
    </v-row>

    <v-row
      align="center"
      class="flex-row-reverse"
    >
      <v-col
        cols="12"
        md="6"
      >
        <Subheading
          :right="mdAndUp"
          subtitle="Desktop, Laptop, or Mobile—CRYPTO Coin has you covered"
          title="Responsive Dashboard"
        />
      </v-col>

      <v-col>
        <ImgCard src="/assets/features/3.jpg" />
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col
        cols="12"
        md="6"
      >
        <Subheading
          :left="mdAndUp"
          subtitle="Anytime, anywhere—The power of CRYPTO is at your fingertips."
          title="Complete Control"
        />
      </v-col>

      <v-col>
        <ImgCard src="/assets/features/4.jpg" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const { mdAndUp } = useDisplay()
</script>
