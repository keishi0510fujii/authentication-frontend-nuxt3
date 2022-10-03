<script lang="ts" setup>
type FAQ = {
  question: string;
  answer: string;
};
const FAQList: FAQ[] = [
  {
    question: '投票する際に費用はかかりますか？',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: '投票するさいに費用はかかりますか？',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: '投票するサイに費用はかかりますか？',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
</script>

<template>
  <section>
    <div v-for="(FAQContents, index) in FAQList" :key="index" class="FAQ-inner">
      <p class="question">
        {{ `Q.${FAQContents.question}` }}
      </p>
      <p class="answer">
        {{ FAQContents.answer }}
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: $primaryColor;
  height: auto;
  width: 100%;
  padding: 36px 0;

  .FAQ-inner {
    width: 60%;
    margin: 48px auto 0 auto;
    height: auto;
    background-color: white;
    border-radius: 10px;
    padding: 24px 30px;

    &:first-child {
      margin: 0 auto;
    }

    .question {
      font-size: 20px;
      color: $gray;
    }

    .answer {
      font-size: 18px;
      color: $gray;
      border-left: 3px solid $lightGray;
      padding-left: 12px;
      margin: 10px 0 0 10px;
      line-height: 1.5em;
    }
  }
}
</style>
