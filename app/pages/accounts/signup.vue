<script lang="ts" setup>
import PageTitle from '~/components/base/title/page-title.vue';
import SignupForm from '~/components/module/accounts/container/signup-form.vue';
</script>

<template>
  <main>
    <PageTitle text="サインアップ" />
    <SignupForm />
  </main>
</template>

<style lang="scss" scoped>
main {
  //  flex: 1; がないとフッターが下部に固定されない
  flex: 1;
  margin-top: $defaultMainMarginTop;
  padding-top: $mainPaddingTop;
}
</style>
