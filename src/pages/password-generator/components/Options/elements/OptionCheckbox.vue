<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
  label: string
}>()

const emit = defineEmits(['update:modelValue'])

const checkboxValue = computed<boolean>({
  get: () => props.modelValue,

  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <label class="option">
    <input
      v-model="checkboxValue"
      type="checkbox"
    />
    <span class="checkmark" />
    <span class="caption">
      {{ label }}
    </span>
  </label>
</template>

<style lang="scss" scoped>
.option {
  position: relative;
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    position: absolute;
    width: 0;
    height: 0;
    cursor: pointer;
    opacity: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid var(--clr-almost-white);
    background-color: var(--clr-dark-grey);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &::after {
      position: absolute;
      top: -1px;
      left: 4px;
      display: none;
      width: 8px;
      height: 15px;
      border: solid black;
      border-width: 0 3.8px 3.8px 0;
      content: '';
      transform: rotate(45deg);
    }
  }

  &:hover input ~ .checkmark {
    border: 2px solid var(--clr-neon-green);
  }

  input:checked ~ .checkmark {
    border: 2px solid var(--clr-neon-green);
    background-color: var(--clr-neon-green);
  }

  input:checked ~ .checkmark::after {
    display: block;
  }

  .caption {
    margin-left: 2.5rem;
    font-size: var(--fs-small);
  }
}
</style>
