<template>
  <div class="case_card" :style="`padding: ${padding}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    padding: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';

  .case_card {
    position: relative;
    overflow: hidden;
    @include card(auto, auto, 32px, 8px);

    @media screen and (max-width: 768px) {
      @include card(auto, auto, 20px, 8px);
    }
  }
</style>
