<script lang="ts" setup>
import InputField from '~/components/base/input/input-field.vue';
import InputTitle from '~/components/base/title/input-title.vue';

type Props = {
  title: string;
  placeholder: string;
  mailAddress: string;
};
type Emits = {
  (eventName: 'update', value: string): void;
};

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const updateMailAddress = (mailAddress: string) => {
  emits('update', mailAddress);
};
</script>

<template>
  <div>
    <InputTitle :title="props.title">
      <InputField
        class="input-field"
        :value="props.mailAddress"
        :placeholder="props.placeholder"
        type="email"
        :disabled="false"
        @update="updateMailAddress"
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
