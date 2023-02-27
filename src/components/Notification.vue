<script lang="ts" setup>
import { watch } from 'vue'

let timeout: ReturnType<typeof setTimeout>

const props = defineProps<{
  show: boolean
  title: string
  message: string
  variant: 'success' | 'error' | 'warning'
  howLong: number
}>()

const emit = defineEmits(['closed'])

watch(
  () => props.show,
  (newValue, oldValue) => {
    if (newValue !== oldValue && newValue) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        emit('closed')
      }, props.howLong)
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div
        v-if="show"
        class="notification"
      >
        <div
          class="content"
          :data-variant="variant"
        >
          <div class="title">{{ title }}</div>
          <div class="message">{{ message }}</div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.notification {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  min-height: 2rem;
  justify-content: center;

  .content {
    padding: 0.2rem 0.5rem;
    margin-top: 0.1rem;
    background-color: var(--clr-dark-grey);

    &[data-variant='error'] {
      border-bottom-color: var(--clr-red);
    }

    &[data-variant='warning'] {
      border-bottom-color: var(--clr-yellow);
    }

    &[data-variant='success'] {
      border-bottom-color: var(--clr-neon-green);
    }

    .title {
      font-size: var(--fs-small);
      font-weight: 700;
    }

    .message {
      font-size: var(--fs-xsmall);
      font-weight: 400;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
