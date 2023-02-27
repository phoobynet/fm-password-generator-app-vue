<script lang="ts" setup>
import { Container } from '@/components'
import { usePasswordGenerator } from '@/composables'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'

const { password, invalidOptions } = usePasswordGenerator()

const iconClass = computed(() => ({
  icon: true,
  'icon-error': invalidOptions.value,
}))

const onCopy = () => {
  if (invalidOptions.value) {
    return
  }

  navigator.clipboard.writeText(password.value)
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
        {{ password }}
      </p>
      <FontAwesomeIcon
        :class="iconClass"
        :icon="faCopy"
      />
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.password {
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

  .icon {
    color: var(--clr-neon-green);
    cursor: pointer;
    font-size: var(--fs-base);
  }

  .icon-error {
    color: var(--clr-grey);
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    padding: 1.125rem 2rem;

    .text {
      font-size: var(--fs-xlarge);
      line-height: 2.64rem;
    }

    .icon {
      font-size: var(--fs-large);
    }
  }
}
</style>
