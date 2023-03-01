<script lang="ts" setup>
import { usePasswordGenerator } from '@/composables'
import { useElementSize } from '@vueuse/core'
import { ref, watch } from 'vue'

const minLength = 5
const maxLength = 16
const thumbSize = 28
const range = maxLength - minLength

const { length, invalidOptions } = usePasswordGenerator()
const lengthSlider = ref<HTMLInputElement>()
const progressLength = ref<number>(0)
const { width: lengthSliderWidth } = useElementSize(lengthSlider)

const updateProgress = (el?: HTMLInputElement) => {
  const value = el?.value ? parseInt(el.value) : length?.value

  if (!value) {
    console.warn('No value')

    return
  }

  if (!lengthSliderWidth.value) {
    console.warn('No lengthSliderWidth')
  }

  const pct = (value - minLength) / range

  let p = (lengthSliderWidth.value - thumbSize) * pct

  if (p > 0) {
    p += 1
  }

  progressLength.value = p

  if (length) {
    length.value = value
  }
}

const onInput = (ev: InputEvent) => {
  const el = ev.currentTarget as HTMLInputElement

  updateProgress(el)
}

watch(lengthSliderWidth, (newValue) => {
  if (!newValue) {
    return
  }

  updateProgress()
})
</script>

<template>
  <div class="length-slider">
    <div
      class="progress"
      :style="{ width: `${progressLength}px` }"
    ></div>
    <input
      ref="lengthSlider"
      type="range"
      :min="minLength"
      :max="maxLength"
      :step="1"
      :value="length"
      :disabled="invalidOptions"
      @input="onInput"
    />
  </div>
</template>

<style lang="scss" scoped>
$thumb-size: 1.75rem;
$thumb-border-radius: 50%;
$thumb-margin-top: -0.625rem;
$track-height: 0.5rem;

@mixin track {
  height: $track-height;
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
  transition: all 0.2s ease-in-out;

  &:active,
  &:hover {
    border: 2px solid var(--clr-neon-green);
    background-color: var(--clr-very-dark-grey);
    cursor: grabbing;
  }
}

.length-slider {
  position: relative;

  input[type='range'] {
    width: 100%;
    appearance: none;
    background: transparent;

    &::-webkit-slider-runnable-track {
      @include track;

      height: $track-height;
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
  }

  .progress {
    position: absolute;
    top: 0.7rem;

    // HACK: Firefox
    @-moz-document url-prefix("") {
      top: 0.5rem;
    }

    height: $track-height;
    background-color: var(--clr-neon-green);
  }
}
</style>
