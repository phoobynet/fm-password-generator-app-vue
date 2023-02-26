<script lang="ts" setup>
import OptionCheckbox from './OptionCheckbox.vue'
import { usePasswordGenerator } from '@/composables'

const { numbers } = usePasswordGenerator()
</script>

<template>
  <OptionCheckbox
    v-model="numbers"
    label="Include Numbers"
  />
</template>
