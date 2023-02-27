<script lang="ts" setup>
import { usePasswordGenerator } from '@/composables'
import { StrengthLevel } from '@/composables/usePasswordGenerator'
import { computed } from 'vue'

const { strength } = usePasswordGenerator()

const barsClasses = computed(() => ({
  'too-weak': strength.value === StrengthLevel.TooWeak,
  weak: strength.value === StrengthLevel.Weak,
  medium: strength.value === StrengthLevel.Medium,
  strong: strength.value === StrengthLevel.Strong,
}))

const strengthDescription = computed(() => {
  switch (strength.value) {
    case StrengthLevel.TooWeak:
      return 'Too weak'
    case StrengthLevel.Weak:
      return 'Weak'
    case StrengthLevel.Medium:
      return 'Medium'
    case StrengthLevel.Strong:
      return 'Strong'
    default:
      return ''
  }
})
</script>

<template>
  <div class="strength-indicator">
    <div class="caption">STRENGTH</div>
    <div
      class="bars"
      :class="barsClasses"
    >
      <div class="level">{{ strengthDescription }}</div>
      <div
        v-for="i in 4"
        :key="i"
        :class="{
          bar: true,
          filled: i <= strength,
          'too-weak': strength === 1,
          weak: strength === 2,
          medium: strength === 3,
          strong: strength === 4,
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

        &.too-weak {
          background-color: var(--clr-red);
        }

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
