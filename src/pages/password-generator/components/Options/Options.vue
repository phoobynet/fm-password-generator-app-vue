<script lang="ts" setup>
import {
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
      <OptionLengthSlider />
      <div class="checkboxes">
        <UppercaseCheckbox />
        <LowercaseCheckbox />
        <NumbersCheckbox />
        <SymbolsCheckbox />
      </div>
      <StrengthIndicator />
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.options {
  padding: 1rem;

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

  .checkboxes {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
  }
}
</style>
