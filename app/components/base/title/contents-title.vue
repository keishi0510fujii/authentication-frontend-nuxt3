<script lang="ts" setup>
type Props = {
  title: string;
};

const props = defineProps<Props>();
</script>

<template>
  <h3>{{ props.title }}</h3>
</template>

<style lang="scss" scoped>
h3 {
  font-size: $contentsTitleFontSize;
  color: $gray;
  font-weight: bold;
}
</style>
