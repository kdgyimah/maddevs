<template>
  <div class="table-of-contents">
    <div class="table-of-contents__title">Table of contents</div>
    <ol class="table-of-contents__list">
      <li class="table-of-contents__list-item" v-if="link.type === 'list-item'" v-for="(link, index) in content" :key="index">
        <a :href="link.spans.length ? link.spans[0].data.url : null" @click.prevent="scrollToSection">
          {{link.text}}
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TableOfContents',
  props: {
    content: {
      type: Array,
      required: true
    }
  },
  created() {
    this.content.forEach((link => {
      if(link.spans.length) {
        link.spans[0].data.url = link.spans[0].data.url.replace('https://', '');
      }
    }));
  },
  methods: {
    scrollToSection(e) {
      const id = e.target.getAttribute('href') ? e.target.getAttribute('href').replace('#', '') : null;
      const element = document.getElementById(id);
      if (element !== null) {
        window.scrollTo({
          top: element.offsetTop + 180,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/vars";
  @import '../../assets/styles/cases/mixins';

  .table-of-contents {
    padding: 23px 24px;
    background-color: $bgcolor--silver;

    &__title {
      @include title($text-color--black-cases, 21px, -0.04em);
      margin-bottom: 20px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
    }

    &__list {
      padding-left: 20px;
      margin: 0;

      &-item {
        padding: 7px 0 12px;
        font-family: 'Inter', sans-serif;
        font-weight: 400;

        a {
          text-decoration: none;
          color: $text-color--black-cases;

          &:hover {
            text-decoration: underline;
          }

          &:visited {
            color: inherit;
          }
        }
      }
    }
  }
</style>
