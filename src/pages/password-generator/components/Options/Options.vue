<script lang="ts" setup>
import {
  GenerateButton,
  LowercaseCheckbox,
  NumbersCheckbox,
  OptionLengthSlider,
  StrengthIndicator,
  SymbolsCheckbox,
  UppercaseCheckbox,
} from './elements'
import { Container } from '@/components'
import { usePasswordGenerator } from '@/composables'

const { length } = usePasswordGenerator()
</script>

<template>
  <Container>
    <div class="options">
      <div class="length">
        <div>Character Length</div>
        <div>{{ length }}</div>
      </div>
      <div class="slider">
        <OptionLengthSlider />
      </div>
      <div class="checkboxes">
        <UppercaseCheckbox />
        <LowercaseCheckbox />
        <NumbersCheckbox />
        <SymbolsCheckbox />
      </div>
      <StrengthIndicator />
      <GenerateButton />
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.options {
  display: grid;
  padding: 1rem;
  grid-template-rows: [length] auto [slider] 2.5rem [checkboxes] 12rem [strength] 4.5rem [generate] auto;

  .length {
    display: flex;
    align-items: center;
    justify-content: space-between;

    :first-child {
      font-size: var(--fs-small);
      line-height: 1.32rem;
    }

    :last-child {
      color: var(--clr-neon-green);
      font-size: var(--fs-large);
      line-height: 1.98rem;
    }
  }

  .slider {
    align-self: center;
  }

  .checkboxes {
    display: flex;
    flex-direction: column;
    margin-top: 1.76rem;
    gap: 0.9rem;
  }
}
</style>
