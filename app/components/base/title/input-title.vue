<script lang="ts" setup>
type Props = {
  title: string;
};

const props = defineProps<Props>();
</script>

<template>
  <label>
    {{ props.title }}
    <slot />
  </label>
</template>

<style lang="scss" scoped>
label {
  display: block;
}
</style>
