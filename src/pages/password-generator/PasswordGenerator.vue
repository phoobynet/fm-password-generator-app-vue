<script lang="ts" setup>
import GeneratedPassword from './components/GeneratedPassword.vue'
import Header from './components/Header.vue'
import Options from './components/Options'
</script>

<template>
  <div class="password-generator">
    <div class="content">
      <Header />
      <GeneratedPassword />
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
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    gap: 1.5rem;
  }
}
</style>
