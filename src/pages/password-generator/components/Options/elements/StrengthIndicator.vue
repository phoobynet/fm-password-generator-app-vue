<script lang="ts" setup>
import { usePasswordGenerator } from '@/composables'

const { strength } = usePasswordGenerator()
</script>

<template>
  <div class="strength-indicator">
    <div class="caption">STRENGTH</div>
    <pre>{{ strength }}</pre>
  </div>
</template>

<style lang="scss" scoped>
.strength-indicator {
  .caption {
    color: var(--clr-grey);
    font-size: var(--fs-small);
    text-transform: uppercase;
  }

  background-color: var(--clr-very-dark-grey);

  @media screen and (min-width: 768px) {
    font-size: var(--fs-base);
  }
}
</style>
