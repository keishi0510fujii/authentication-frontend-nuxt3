<script lang="ts" setup>
type Props = {
  url: string;
};
const props = defineProps<Props>();
</script>

<template>
  <div :style="`background-image: url(${props.url});`" />
</template>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
