<template>
  <div class="layout">
    <layout-side />
    <div class="layout-main">
      <ContentHeader :title="title">
        <slot
          v-if="$slots.header"
          name="header"
        />
      </ContentHeader>
      <section class="layout-main_content">
        <slot />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import LayoutSide from '~/components/LayoutSide.vue';
import ContentHeader from '~/components/ContentHeader.vue';

@Component({
  components: {
    LayoutSide,
    ContentHeader,
  },
})
export default class DefaultLayout extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string
}
</script>

<style lang="scss">
.layout {
  display: flex;
  @include md {
    flex-direction: row;
  }
  &-main {
    flex-grow: 1;
    &_content {
      display: grid;
      grid-template-columns:
        [full-start] 30px
        [main-start] auto [main-end]
        30px [full-end];
      padding-top: 40px;
      padding-bottom: 40px;
      @include sm {
        grid-template-columns:
          [full-start] 80px
          [main-start] auto [main-end]
          80px [full-end];
      }
      @include xl {
        grid-template-columns:
          [full-start] 1fr
          [main-start] 920px [main-end]
          1fr [full-end];
      }
      @include uw {
        grid-template-columns:
          [full-start] 260px
          [main-start] auto [main-end]
          260px [full-end];
      }
      & > * {
        grid-column: main;
      }
      & > .alignfull {
        grid-column: full;
      }
    }
  }
}
</style>
