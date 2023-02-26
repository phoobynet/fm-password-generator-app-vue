<script lang="ts" setup>
import OptionCheckbox from './OptionCheckbox.vue'
import { usePasswordGenerator } from '@/composables'

const { lowercase } = usePasswordGenerator()
</script>

<template>
  <OptionCheckbox
    v-model="lowercase"
    label="Include Lowercase Letters"
  />
</template>
