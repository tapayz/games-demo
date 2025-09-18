<template>
  <v-container
    id="hero"
    :class="smAndDown && 'pt-0'"
    class="px-0"
    tag="section"
  >
    <v-responsive class="overflow-visible" min-height="50vh">
      <v-row
        align="center"
        align-content="center"
        class="fill-height mx-0"
        justify="space-around"
      >
        <v-slide-x-transition v-if="mdAndUp" appear>
          <v-col cols="12" md="6">
            <ImgCard src="/assets/features/1.jpg" />
          </v-col>
        </v-slide-x-transition>

        <v-slide-x-reverse-transition appear>
          <v-col cols="auto">
            <h1
              :class="[smAndDown ? 'display-2 text-white' : 'text-h1']"
              class="font-weight-bold"
            >
              Tapayz
            </h1>

            <div
              :class="[smAndDown ? 'text-h5 text--lighten-1' : 'text-h4']"
              class="text-grey mb-md-12 mb-6"
            >
              Secure wallet transfers, <em>today</em>
            </div>

            <Btn class="title" height="78" block color="#5278ff">
              <span class="text-h6">Deposit</span>
            </Btn>
            <Btn class="title mt-4" height="78" block color="#e95252">
              <span class="text-h6">Withdrawal</span>
            </Btn>
          </v-col>
        </v-slide-x-reverse-transition>

        <!-- <v-slide-y-reverse-transition appear>
          <v-col
            class="mt-12"
            cols="12"
          >
            <Card class="pa-12">
              <v-row class="text-center">
                <v-col
                  v-for="(highlight, i) in highlights"
                  :key="i"
                  cols="12"
                  md="4"
                >
                  <v-img
                    :src="`/assets/highlights/${highlight.src}`"
                    class="mb-8"
                    max-height="200"
                    width="100%"
                    contain
                  />

                  <h2
                    class="text-h5 font-weight-bold mb-6"
                    v-text="highlight.title"
                  />

                  <v-responsive
                    class="text-grey body-1 mx-auto"
                    max-width="256"
                  >
                    {{ highlight.text }}
                  </v-responsive>
                </v-col>
              </v-row>
            </Card>
          </v-col>
        </v-slide-y-reverse-transition> -->
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
const { mdAndUp, smAndDown } = useDisplay();

const highlights = ref([
  {
    src: "1.png",
    title: "Smooth Sailing",
    text: "A wallet crafted to reduce the steep learning curve of the blockchain.",
  },
  {
    src: "2.png",
    title: "Decentralized",
    text: "We believe in the importance of a decentralized future, that’s why we want to bring the blockchain to the 99%.",
  },
  {
    src: "3.png",
    title: "Web3 Injection",
    text: "Cutting edge tech, that makes interacting with the Ethereum blockchain seamless.",
  },
]);
</script>
