<script lang="ts" setup>
type Props = {
  text: string;
  disabled: boolean;
};
type Emits = {
  (eventName: 'click'): void;
};

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
</script>

<template>
  <button :disabled="props.disabled" @click="emits('click')">
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
button {
  background: $primaryColor;
  color: white;
  border-radius: $primaryRadius;
  padding: $buttonPadding;
  height: 45px;
  width: 100%;
  outline: none;
  font-size: $buttonFontSize;
  &:hover {
    cursor: pointer;
    opacity: 80%;
    font-size: $hoverButtonRate;
  }
  &:disabled {
    opacity: 20%;
    cursor: not-allowed;
  }
}
</style>
