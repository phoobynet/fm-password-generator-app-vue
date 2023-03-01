<script lang="ts" setup>
import { Container } from '@/components'
import { usePasswordGenerator } from '@/composables'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, ref } from 'vue'

const { password, invalidOptions } = usePasswordGenerator()

const iconClass = computed(() => ({
  icon: true,
  'icon-error': invalidOptions.value || password.value === '',
}))

const showCopied = ref<boolean>(false)
let copiedTimeout: ReturnType<typeof setTimeout>

const onCopy = () => {
  if (invalidOptions.value) {
    return
  }

  navigator.clipboard.writeText(password.value)

  if (copiedTimeout) {
    clearTimeout(copiedTimeout)
  }

  showCopied.value = true

  copiedTimeout = setTimeout(() => {
    showCopied.value = false
  }, 3000)
}
</script>

<template>
  <Container>
    <div
      class="password"
      @click="onCopy"
    >
      <p
        v-if="invalidOptions"
        class="text error"
      >
        Invalid options
      </p>
      <p
        v-else
        class="text"
      >
        <template v-if="password">
          {{ password }}
        </template>
        <template v-else>
          <span class="not-password">P4$5W0rD!</span>
        </template>
      </p>
      <div class="copy-container">
        <Transition>
          <div
            v-if="showCopied"
            class="copied"
          >
            copied
          </div>
        </Transition>
        <FontAwesomeIcon
          :class="iconClass"
          :icon="faCopy"
        />
      </div>
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.password {
  position: relative;
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  .text {
    display: inline-block;
    overflow: hidden;
    max-width: 90%;
    font-size: var(--fs-large);
    line-height: 1.98rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .error {
    color: var(--clr-red);
    font-size: var(--fs-small) !important;
  }

  .not-password {
    color: var(--clr-almost-white);
    opacity: 0.25;
  }

  .copy-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .copied {
      margin-top: 0.3rem;
      color: var(--clr-neon-green);
      font-size: var(--fs-xsmall);
      text-transform: uppercase;
    }

    .icon {
      color: var(--clr-neon-green);
      cursor: pointer;
      font-size: var(--fs-base);
      transition: all 0.2s ease;

      &:hover {
        color: var(--clr-almost-white);
      }

      &:active {
        color: var(--clr-neon-green);
        transform: scale(0.9);
      }
    }

    .icon-error {
      color: var(--clr-grey);
      cursor: not-allowed;
    }
  }

  @media (min-width: 768px) {
    height: 5rem;
    padding: 1.125rem 2rem;

    .text {
      font-size: var(--fs-xlarge);
      line-height: 2.64rem;
    }

    .copy-container {
      .icon {
        font-size: var(--fs-large);
      }
    }
  }
}
</style>
