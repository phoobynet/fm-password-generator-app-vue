<script lang="ts" setup>
import { usePasswordGenerator } from '@/composables'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const { generatePassword, invalidOptions } = usePasswordGenerator()
</script>

<template>
  <button
    class="generator-button"
    :disabled="invalidOptions"
    @click="() => generatePassword()"
  >
    <span>generate</span>
    <FontAwesomeIcon :icon="faArrowRight" />
  </button>
</template>

<style lang="scss" scoped>
.generator-button {
  display: flex;
  width: 100%;
  height: 3.5rem;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-neon-green);
  color: var(--clr-very-dark-grey);
  cursor: pointer;
  gap: 1rem;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &[disabled] {
    background-color: var(--clr-grey);
    color: var(--clr-almost-white);
    cursor: not-allowed;
  }
}
</style>
