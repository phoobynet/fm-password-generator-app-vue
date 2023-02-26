<script lang="ts" setup>
import { usePasswordGenerator } from '@/composables'

const minLength = 8
const maxLength = 28

const { length } = usePasswordGenerator()
</script>

<template>
  <div class="length-slider">
    <input
      type="range"
      :min="minLength"
      :max="maxLength"
      :step="1"
      :value="length"
      @change="length = $event.target.value"
    />
  </div>
</template>

<style lang="scss" scoped>
$thumb-size: 1.75rem;
$thumb-border-radius: 50%;
$thumb-margin-top: -0.625rem;

@mixin track {
  height: 0.5rem;
  background-color: var(--clr-very-dark-grey);
}

@mixin thumb {
  width: $thumb-size;
  height: $thumb-size;
  border-radius: $thumb-border-radius;
  margin-top: $thumb-margin-top;
  appearance: none;
  background-color: var(--clr-almost-white);
  cursor: pointer;

  &:active {
    cursor: grabbing;
  }
}

.length-slider {
  input[type='range'] {
    width: 100%;
    appearance: none;
    background: transparent;

    &::-webkit-slider-runnable-track {
      @include track;

      height: 0.5rem;
      background-color: var(--clr-very-dark-grey);
    }

    &::-webkit-slider-thumb {
      @include thumb;

      appearance: none;
    }

    &::-moz-range-track {
      @include track;
    }

    &::-moz-range-thumb {
      @include thumb;
    }

    &::-moz-range-progress {
      height: 0.5rem;
      background-color: var(--clr-neon-green);
    }
  }
}
</style>
