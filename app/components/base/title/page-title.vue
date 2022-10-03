<script lang="ts" setup>
type Props = {
  text: string;
};
const props = defineProps<Props>();
</script>

<template>
  <h2>{{ props.text }}</h2>
</template>

<style lang="scss" scoped>
h2 {
  text-align: center;
  font-size: $pageTitleFontSize;
  font-weight: lighter;
  color: $gray;
  margin: $pageTitleMargin;
}
</style>
