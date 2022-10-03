<script lang="ts" setup>
import LoginForm from '~/components/module/accounts/container/login-form.vue';
import PageTitle from '~/components/base/title/page-title.vue';
</script>

<template>
  <main>
    <PageTitle text="ログイン" />
    <LoginForm />
  </main>
</template>

<style lang="scss" scoped>
main {
  margin-top: $defaultMainMarginTop;
  padding-top: $mainPaddingTop;
}
</style>
