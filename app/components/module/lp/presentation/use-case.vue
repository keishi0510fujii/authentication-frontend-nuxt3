<script lang="ts" setup>
import sampleImageUrl from '~/assets/images/use-case-sample.jpeg';
import ContentsTitle from '~/components/base/title/contents-title.vue';
const mockData = [
  {
    imageUrl: sampleImageUrl,
    title: 'Type Something',
    detail:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    imageUrl: sampleImageUrl,
    title: 'Type Something2',
    detail:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    imageUrl: sampleImageUrl,
    title: 'Type Something3',
    detail:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
];
</script>

<template>
  <section>
    <div v-for="(data, index) in mockData" :key="index" class="use-case-inner">
      <div
        class="use-case-image"
        :style="`background-image: url(${data.imageUrl});`"
      />
      <div class="use-case-text">
        <div class="use-case-title">
          <ContentsTitle :title="data.title" />
        </div>
        <div class="use-case-detail">
          <p>{{ data.detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: $lightGray;
  min-height: 800px;
  height: auto;
  width: 100%;
  padding: 36px 0;

  .use-case-inner {
    display: flex;
    padding: 48px 80px;
    justify-content: space-between;
    align-items: center;

    .use-case-image {
      height: 360px;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .use-case-text {
      width: 100%;
      height: auto;
      padding: 0 24px;

      .use-case-title {
        margin-bottom: 24px;
        font-weight: bold;
      }

      .use-case-detail {
        p {
          line-height: 1.5em;
        }
      }
    }
  }
}
</style>
