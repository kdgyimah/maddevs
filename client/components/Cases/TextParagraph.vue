<template>
  <p class="case_paragraph" :style="textColor">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'TextParagraph',
  props: {
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    textColor() {
      if (this.$props.color) {
        return `color: ${this.$props.color}`;
      } else {
        return null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/cases/_mixins';

  .case {
    &_paragraph {
      @include default_text($text-color--black-cases, 17px, 166%, -0.035em, normal);

      @media screen and (max-width: 768px) {
        @include default_text($text-color--black-cases, 16px, 150%, -0.02em, normal);
      }

      &--bold {
        font-weight: 700;  
      }
    }
  }
</style>
