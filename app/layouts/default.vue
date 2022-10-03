<script lang="ts" setup></script>

<template>
  <div id="layout">
    <GlobalHeader />
    <slot />
    <GlobalFooter />
  </div>
</template>

<style lang="scss" scoped>
//  こことページコンポーネントの main { flex: 1; } でフッターを下部に固定している
#layout {
  margin: 0;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
