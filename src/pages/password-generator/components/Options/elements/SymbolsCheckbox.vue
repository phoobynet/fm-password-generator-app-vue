<script lang="ts" setup>
import OptionCheckbox from './OptionCheckbox.vue'
import { usePasswordGenerator } from '@/composables'

const { symbols } = usePasswordGenerator()
</script>

<template>
  <OptionCheckbox
    v-model="symbols"
    label="Include Symbols"
  />
</template>
