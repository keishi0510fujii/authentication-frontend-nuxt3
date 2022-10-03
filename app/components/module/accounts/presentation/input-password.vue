<script lang="ts" setup>
import InputField from '~/components/base/input/input-field.vue';
import InputTitle from '~/components/base/title/input-title.vue';

type Props = {
  title: string;
  placeholder: string;
  plainPassword: string;
};
type Emits = {
  (eventName: 'update', value: string): void;
};

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const updatePassword = (planePassword: string) => {
  emits('update', planePassword);
};
</script>

<template>
  <div>
    <InputTitle :title="props.title">
      <InputField
        class="input-field"
        :value="props.plainPassword"
        :placeholder="props.placeholder"
        type="password"
        :disabled="false"
        @update="updatePassword"
      />
    </InputTitle>
  </div>
</template>

<style lang="scss" scoped>
div {
  margin: $inputBlockMargin;
  .input-field {
    margin: 5px auto;
  }
}
</style>
