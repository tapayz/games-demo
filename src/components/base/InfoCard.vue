<template>
  <v-hover>
    <template #default="{ props: activatorProps, isHovering }">
      <Card
        v-bind="{ ...$attrs, ...activatorProps }"
        :elevation="isHovering ? 0 : 12"
        class="px-8 py-12"
      >
        <v-card-title class="font-weight-light mb-4">
          {{ title }}
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col
              v-for="(stat, i) in stats"
              :key="i"
              class="mt-4"
              cols="6"
              xl="3"
            >
              <div
                class="text-h5 font-weight-bold white--text mb-5"
                v-text="stat.title"
              />

              <span
                class="text-uppercase font-weight-bold"
                v-text="stat.subtitle"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </Card>
    </template>
  </v-hover>
</template>

<script setup lang="ts">
  interface Props {
    stats: any[]
    title: string
  }

  defineOptions({
    inheritAttrs: false,
  })

  withDefaults(defineProps<Props>(), {
    stats: () => [],
    title: '',
  })
</script>
