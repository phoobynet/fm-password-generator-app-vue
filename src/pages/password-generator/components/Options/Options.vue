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
      <label
        class="length"
        for="characterLength"
      >
        <span>Character Length</span>
        <span>{{ length }}</span>
      </label>
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

  @media screen and (min-width: 768px) {
    padding: 1.8rem 2rem 0;
    grid-template-rows: [length] auto [slider] 4.2rem [checkboxes] 12.5rem [strength] 6.5rem [generate] auto;

    .length {
      :first-child {
        font-size: var(--fs-base);
      }

      :last-child {
        font-size: var(--fs-xlarge);
      }
    }

    .slider {
      align-self: center;
    }

    .checkboxes {
      margin-top: 0.9rem;
      gap: 1.1rem;
    }
  }
}
</style>
