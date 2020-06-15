<template>
  <aside
    class="layout-side"
    :class="classOpen"
    @click="clickOut"
  >
    <div class="layout-side_background" />
    <div class="layout-side_content">
      <sideNav />
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import SideNav from '@/components/SideNav.vue';

@Component({
  components: {
    SideNav,
  },
})
export default class LayoutSide extends Vue {
  @Prop(Boolean) isOpen!: boolean;

  get classOpen(): string {
    return this.isOpen ? 'is-open' : '';
  }

  clickOut({ target }: { target: HTMLElement }): void {
    if (this.isOpen && target.classList.contains('layout-side')) {
      this.$emit('clickOut');
    }
  }
}
</script>

<style lang="scss">
$layout-side-width: 220px;

.layout-side {
  position: fixed;
  top: 50px;
  left: -$layout-side-width;
  bottom: 0;
  z-index: 10;
  flex-shrink: 0;
  overflow: hidden;
  transition: left ease .3s, background-color ease .3s;
  &_content {
    position: relative;
    height: 100%;
    max-width: $layout-side-width;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-y: auto;
    padding: 10px 20px;
    background-color: $palette-blue-600;
  }
  &_nav {
    flex-grow: 1;
    width: 100%;
  }
  &_title {
    font-size: 2.2rem;
    margin-bottom: 15px;
    color: $color-white;
    text-align: center;
    border-bottom: 1px solid rgba($palette-blue-grey-100, 0.2);
  }
  &_footer {
    padding: 10px;
  }
  &.is-open {
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .75);
  }
  @include lg {
    top: 0;
    left: 0;
    width: $layout-side-width;
    background-color: $palette-blue-600;
    &_background {
      position: absolute;
      top: -40px;
      left: -40px;
      right: -40px;
      bottom: -40px;
      background-color: $palette-blue-400;
      background-image: linear-gradient(to top right,
        rgba($palette-blue-700, 0.8) 0%,
        rgba($palette-blue-800, 0.7) 45%,
        rgba($palette-blue-800, 0.6) 60%);
      filter: blur(20px);
      &:before {
        content: '';
        position: absolute;
        top: -70px;
        left: -70px;
        right: -70px;
        bottom: -70px;
        background-image: linear-gradient(-19deg,
          rgba($palette-cyan-300, 0.8) 0%,
          rgba($palette-cyan-400, 0.4) 46%,
          rgba($palette-cyan-600, 0.05) 50%);
        filter: blur(70px);
      }
    }
    &_content {
      padding: 60px 40px 0;
      background-color: transparent;
    }
  }
}

</style>
