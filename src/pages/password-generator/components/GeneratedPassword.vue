<script lang="ts" setup>
import { Container } from '@/components'
import { usePasswordGenerator } from '@/composables'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const { password } = usePasswordGenerator()
</script>

<template>
  <Container>
    <div class="password">
      <p class="text">{{ password }}</p>
      <FontAwesomeIcon
        class="icon"
        :icon="faCopy"
      />
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.password {
  display: flex;
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

  .icon {
    color: var(--clr-neon-green);
    cursor: pointer;
    font-size: var(--fs-base);
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
