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
    <FontAwesomeIcon
      :icon="faArrowRight"
      :size="'xs'"
    />
  </button>
</template>

<style lang="scss" scoped>
.generator-button {
  display: flex;
  width: 100%;
  height: 3.5rem;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--clr-neon-green);
  background-color: var(--clr-neon-green);
  color: var(--clr-very-dark-grey);
  cursor: pointer;
  font-size: var(--fs-small);
  gap: 0.9rem;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &[disabled] {
    border: 2px solid var(--clr-almost-white);
    background-color: var(--clr-grey);
    color: var(--clr-almost-white);
    cursor: not-allowed;
  }

  &:hover {
    &:not([disabled]) {
      border: 2px solid var(--clr-neon-green);
      background-color: var(--clr-dark-grey);
      color: var(--clr-neon-green);
    }
  }

  @media screen and (min-width: 768px) {
    height: 4.0625rem;
    font-size: var(--fs-base);
    gap: 1.4rem;
  }
}
</style>
