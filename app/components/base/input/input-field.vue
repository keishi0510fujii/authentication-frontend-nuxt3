<script lang="ts" setup>
import { ref } from 'vue';

type InputType = 'text' | 'email' | 'password';
type Props = {
  type: InputType;
  placeholder: string;
  disabled: boolean;
  value?: string;
};
type Emits = {
  (eventName: 'update', value: string): void;
};
const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const modelValue = ref<string>(props.value ?? '');
</script>

<template>
  <input
    v-model="modelValue"
    :type="props.type"
    :placeholder="props.placeholder"
    @input="emits('update', modelValue)"
  />
</template>

<style lang="scss" scoped>
input {
  width: 100%;
  height: $inputFieldHeight;
  padding: $inputFieldPadding;
  border: $inputFieldBorder;
  border-radius: $inputFieldRadius;
  color: $defaultTextColor;
  outline: none;
  font-size: $inputFieldFontSize;
}
</style>
