<script lang="ts" setup>
import { GeneratedPassword, Header, Options } from './components'
</script>

<template>
  <div class="password-generator">
    <div class="content">
      <Header class="content-header" />
      <GeneratedPassword class="content-generated-password" />
      <Options />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.password-generator {
  display: flex;
  height: 100vh;
  justify-content: center;
}

.content {
  display: grid;
  grid-template-rows: [header] 5.4rem [generated-password] 5.85rem [options] 26.5rem;

  .content-header {
    align-self: end;
  }

  .content-generated-password {
    align-self: center;
  }

  @media screen and (min-width: 768px) {
    grid-template-rows: [header] 10.4rem [generated-password] 8.4rem [options] 32.8rem;

    .content-generated-password {
      margin-top: 0.3rem;
    }
  }
}
</style>
