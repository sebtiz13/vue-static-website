<template>
  <div class="layout">
    <div class="layout-header">
      <btn
        id="btn-menu"
        icon="bars"
        text="Menu"
        @click="toggleMenu"
      />
      <g-link
        to="/"
        class="layout-header_title h1-size"
      >
        Sebtiz13
      </g-link>
    </div>
    <layout-side
      :is-open="sideOpen"
      @clickOut="toggleMenu"
    />
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

  public sideOpen = false

  toggleMenu(): void {
    this.sideOpen = !this.sideOpen;
  }
}
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  @include lg {
    flex-direction: row;
    padding-top: initial;
  }
  &-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 50px;
    color: $color-white;
    background-color: $palette-blue-600;
    display: flex;
    align-items: center;
    justify-content: center;
    [id="btn-menu"] {
      position: absolute;
      left: 0;
      height: 50px;
      width: 50px;
      color: $color-white;
      &:hover {
        background: rgba(0, 0, 0, .4);
      }
    }
    &_title {
      color: $color-white;
    }
    @include lg {
      display: none;
    }
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
