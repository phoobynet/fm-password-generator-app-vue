<template>
  <header class="header">
    <h1>Password Generator</h1>
  </header>
</template>

<style lang="scss" scoped>
.header {
  h1 {
    color: var(--clr-grey);
    font-size: var(--fs-small);
    line-height: 1.3125rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: var(--fs-large);
      line-height: 1.98rem;
    }
  }
}
</style>
