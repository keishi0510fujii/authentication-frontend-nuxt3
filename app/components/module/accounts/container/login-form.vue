<script lang="ts" setup>
import { ref } from 'vue';
import InputEmail from '~/components/module/accounts/presentation/input-email.vue';
import PrimaryButton from '~/components/base/button/primary-button.vue';
import InputPassword from '~/components/module/accounts/presentation/input-password.vue';
//  TODO: 特定のstateを受け取るようにする
const email = ref<string>('');
const password = ref<string>('');
//  TODO: 特定のhooksから受け取るように��る
const updateEmail = (mailAddress: string) => {
  console.log('updateEmail: ', mailAddress);
};
const updatePassword = (plainPassword: string) => {
  console.log('updatePasswrod: ', plainPassword);
};

const login = async (): Promise<void> => {
  await console.log('click login');
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

    <PrimaryButton text="ログイン" :disabled="false" @click="login" />
  </form>
</template>

<style lang="scss" scoped>
form {
  display: block;
  width: $maxFormWidth;
  margin: $formMargin;
}
</style>
