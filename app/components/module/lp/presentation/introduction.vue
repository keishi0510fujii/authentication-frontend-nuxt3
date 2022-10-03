<script lang="ts" setup>
import introductionImageUrl from '~/assets/images/introduction.png';
</script>

<template>
  <section :style="`background-image: url(${introductionImageUrl});`"></section>
</template>

<style lang="scss" scoped>
section {
  margin-top: $headerHeight;
  width: 100%;
  height: 900px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(2px) contrast(150%) brightness(75%);
}
</style>
