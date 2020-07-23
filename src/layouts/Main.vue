<template>
  <div class="layout">
    <div class="layout-header">
      <btn
        id="btn-menu"
        icon="bars"
        text="Menu"
        ripple
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
      @navigate="toggleMenu"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LayoutSide from '@/components/LayoutSide.vue';

@Component({
  components: {
    LayoutSide,
  },
})
export default class MainLayout extends Vue {
  public sideOpen = false

  toggleMenu(): void {
    this.sideOpen = !this.sideOpen;
    if (this.sideOpen) {
      document.body.addEventListener('touchmove', this.preventScroll, { passive: false });
    } else {
      document.body.removeEventListener('touchmove', this.preventScroll);
    }
  }

  /**
   * Add preventScroll on touchmove to lock scroll on iphone
   */
  preventScroll(event: Event): void {
    event.preventDefault();
  }
}
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  // Prevent horizontal scroll due to long word or URL
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  @include lg {
    flex-direction: row;
    padding-top: initial;
    padding-left: 220px;
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
    }
    &_title,
    &_title:hover {
      color: $color-white;

    }
    @include lg {
      display: none;
    }
  }
}
</style>
