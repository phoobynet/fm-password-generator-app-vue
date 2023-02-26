<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 343px;
  background-color: var(--clr-dark-grey);

  @media (min-width: 768px) {
    width: 540px;
  }
}
</style>
