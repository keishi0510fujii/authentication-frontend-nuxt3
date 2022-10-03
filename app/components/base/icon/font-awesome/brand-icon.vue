<script lang="ts" setup>
type BrandType = 'twitter' | 'facebook' | 'instagram';
type Brand = {
  [key: string]: {
    iconName: BrandType;
    color: string;
  };
};

//  新たに使うブランドアイコンはこちらに追加すること
const brandList: Brand = {};
brandList.twitter = { iconName: 'twitter', color: '#1da1f2' };
brandList.facebook = { iconName: 'facebook', color: '#3b5998' };
brandList.instagram = { iconName: 'instagram', color: '#e4405f' };

type Props = {
  brandType: BrandType;
};
const props = defineProps<Props>();
const brand = brandList[props.brandType];
</script>

<template>
  <FontAwesomeIcon
    :icon="{ prefix: 'fab', iconName: brand.iconName }"
    :style="{ color: brand.color }"
  />
</template>

<style lang="scss" scoped></style>
