<script lang="ts" setup>
import OptionsCheckbox from './OptionCheckbox.vue'
import { usePasswordGenerator } from '@/composables'

const { uppercase } = usePasswordGenerator()
</script>

<template>
  <OptionsCheckbox
    v-model="uppercase"
    label="Include Uppercase Letters"
  />
</template>
