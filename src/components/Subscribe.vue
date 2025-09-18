<template>
  <Card :max-width="maxWidth" class="py-2">
    <v-text-field
      height="88"
      label="Email Address"
      variant="solo"
      flat
      hide-details
    >
      <template #append-inner>
        <v-hover>
          <template #default="{ props: activatorProps, isHovering }">
            <Btn
              v-bind="activatorProps"
              :elevation="isHovering ? 0 : 6"
              height="64"
            >
              Subscribe
            </Btn>
          </template>
        </v-hover>
      </template>
    </v-text-field>
  </Card>
</template>

<script setup lang="ts">
  interface Props {
    maxWidth: number | string
  }

  withDefaults(defineProps<Props>(), {
    maxWidth: 500,
  })
</script>
