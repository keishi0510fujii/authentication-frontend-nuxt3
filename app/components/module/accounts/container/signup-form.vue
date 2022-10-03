<script lang="ts" setup>
import { ref } from 'vue';
import InputEmail from '~/components/module/accounts/presentation/input-email.vue';
import PrimaryButton from '~/components/base/button/primary-button.vue';
import InputPassword from '~/components/module/accounts/presentation/input-password.vue';
//  TODO: 特定のstateを受け取るようにする
const email = ref<string>('');
const password = ref<string>('');
const passwordConfirmation = ref<string>('');
//  TODO: 特定のstateから受け取るようにする
const updateEmail = (mailAddress: string) => {
  console.log('updateEmail: ', mailAddress);
};
const updatePassword = (plainPassword: string) => {
  console.log('updatePassword: ', plainPassword);
};
const updatePasswordConfirmation = (passwordConfirmation: string) => {
  console.log('updatePasswordConfirmation: ', passwordConfirmation);
};

const login = async (): Promise<void> => {
  await console.log('click signup');
};
</script>

<template>
  <form @submit.prevent="">
    <InputEmail
      title="メールアドレス"
      placeholder="メールアドレスを入力してください"
      :mail-address="email"
      @update="updateEmail"
    />

    <InputPassword
      title="パスワード"
      placeholder="パスワードを入力してください"
      :plain-password="password"
      @update="updatePassword"
    />

    <InputPassword
      title="パスワード確認"
      placeholder="確認のためもう一度パスワードを入力してください"
      :plain-password="passwordConfirmation"
      @update="updatePasswordConfirmation"
    />

    <PrimaryButton text="サインアップ" :disabled="false" @click="login" />
  </form>
</template>

<style lang="scss" scoped>
form {
  display: block;
  width: $maxFormWidth;
  margin: $formMargin;
}
</style>
