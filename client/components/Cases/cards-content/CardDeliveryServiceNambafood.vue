<template>
  <div class="card-content">
    <h3 class="card-content_title case_title_h5">Delivery service Nambafood</h3>
    <TextParagraph class="card-content_paragraph m-24_bottom">
      For 5 years Namba Food actively
      evolves and monthly improves
      opportunities of software.
    </TextParagraph>
    <div class="card-content_rows-wrap">
      <div class="card-content_row m-24_bottom">
        <TextParagraph class="card-content_paragraph card-content_paragraph--bold">
          Yearly increase in orders:
        </TextParagraph>
        <div class="card-content_chart card-content_yearly-increase"></div>
      </div>
      <div class="card-content_row">
        <TextParagraph class="card-content_paragraph card-content_paragraph--bold">
          Increase in sales:
        </TextParagraph>
        <div class="card-content_chart card-content_increase-in-sales"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph';
export default {
  name: 'CardDeliveryServiceNambafood',
  components: {
    TextParagraph
  }
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/cases/_mixins';

  .card-content {
    &_title {
      margin-bottom: 4px;
      color: $text-color--black-lighter;
    }

    &_paragraph {
      @include default_text($text-color--black-lighter, 13px, 166%, -0.02em, normal);

      &--bold {
        margin-bottom: 10px;
        font-weight: 600;
      }
    }

    &_chart {
      width: auto;
      height: 120px;
    }

    &_yearly-increase {
      @include yearly-increase-in-orders;
    }

    &_increase-in-sales {
      @include increase-in-sales;
    }

    @media screen and (max-width: 940px) {
      &_rows-wrap {
        @include grid(repeat(2, 215px), auto, 25px, 0);
        justify-content: space-between;
      }

      &_yearly-increase,
      &_increase-in-sales {
        background-position: left;
      }
    }

    @media screen and (max-width: 768px) {
      &_paragraph {
        @include default_text($text-color--black-lighter, 16px, 150%, -0.02em, normal);

        &--bold {
          @include default_text($text-color--black-lighter, 13px, 166%, -0.02em, bold);
        }
      }
    }

    @media screen and (max-width: 675px) {
      &_rows-wrap {
        @include grid(repeat(2, 1fr), auto, 25px, 0);
      }
    }

    @media screen and (max-width: 470px) {
      &_rows-wrap {
        @include grid(repeat(1, 1fr), auto, 0, 0);
      }

      &_yearly-increase {
        @include yearly-increase-in-orders-mobile;
      }

      &_increase-in-sales {
        @include increase-in-sales-mobile;
      }

      &_yearly-increase, 
      &_increase-in-sales {
        max-width: 287px;
        background-position: left;
      }
    }
  }
</style>
