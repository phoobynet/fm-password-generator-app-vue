<script lang="ts" setup>
import { usePasswordGenerator } from '@/composables'
import { StrengthLevel } from '@/lib/types'

const { strengthResult } = usePasswordGenerator()
</script>

<template>
  <div class="strength-indicator">
    <div class="caption">STRENGTH</div>
    <div class="bars">
      <div class="level">{{ strengthResult?.value }}</div>
      <div
        v-for="i in 4"
        :key="i"
        :class="{
          bar: true,
          filled: i <= strengthResult?.id,
          'too-weak': strengthResult?.id === StrengthLevel.TooWeak,
          weak: strengthResult?.id === StrengthLevel.Weak,
          medium: strengthResult?.id === StrengthLevel.Medium,
          strong: strengthResult?.id === StrengthLevel.Strong,
        }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.strength-indicator {
  display: flex;
  height: 3.5rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: var(--clr-very-dark-grey);

  .caption {
    color: var(--clr-grey);
    font-size: var(--fs-small);
    text-transform: uppercase;
  }

  .bars {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .level {
      padding-right: 0.5rem;
      font-size: var(--fs-base);
      font-weight: 700;
      line-height: 1.485rem;
      text-transform: uppercase;
    }

    .bar {
      width: 10px;
      height: 28px;
      border: 2px solid var(--clr-almost-white);

      &.filled {
        border: none;

        &.too-weak,
        &.weak {
          background-color: var(--clr-red);
        }

        &.medium {
          background-color: var(--clr-yellow);
        }

        &.strong {
          background-color: var(--clr-neon-green);
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fs-base);
  }
}
</style>
