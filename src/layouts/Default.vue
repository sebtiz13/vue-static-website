<template>
  <div class="layout">
    <side-menu />
    <div class="layout-main">
      <LayoutHeader :title="title">
        <slot
          v-if="$slots.header"
          name="header"
        />
      </LayoutHeader>
      <section class="layout-main_content">
        <slot />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import SideMenu from '~/components/SideMenu.vue';
import LayoutHeader from '~/components/LayoutHeader.vue';

@Component({
  components: {
    SideMenu,
    LayoutHeader,
  },
})
export default class DefaultLayout extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string
}
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: row;
  &-main {
    flex-grow: 1;
    &_content {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-columns:
        [full-start] minmax(1em, 1fr)
        [main-start] minmax(480px, 1200px) [main-end]
        minmax(1em, 1fr) [full-end];
      padding-top: 40px;
      padding-bottom: 40px;
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
