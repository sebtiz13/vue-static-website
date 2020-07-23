<template>
  <div class="layout-main">
    <slot
      v-if="$slots.contentHeader"
      name="contentHeader"
    />
    <ContentHeader
      v-else
      :title="title"
      :thumbnail="thumbnail"
    >
      <slot
        v-if="$slots.header"
        name="header"
      />
    </ContentHeader>
    <slot
      v-if="$slots.content"
      name="content"
    />
    <section
      v-else
      class="layout-main_content layout_content"
    >
      <slot />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Image } from '@/types/Image';
import ContentHeader from '@/components/ContentHeader.vue';

@Component({
  components: {
    ContentHeader,
  },
})
export default class DefaultLayout extends Vue {
  @Prop({ type: String, required: true }) private readonly title!: string

  @Prop({ type: Object }) private readonly thumbnail!: Image
}
</script>

<style lang="scss">
.layout {
  &_content {
    display: grid;
    grid-template-columns:
      [full-start] 30px
      [main-start] auto [main-end]
      30px [full-end];
    padding-top: 5px;
    padding-bottom: 5px;
    @include sm {
      grid-template-columns:
        [full-start] 80px
        [main-start] auto [main-end]
        80px [full-end];
    }
    @include xl {
      grid-template-columns:
        [full-start] minmax(100px, 220px)
        [main-start] minmax(780px, auto) [main-end]
        minmax(100px, 220px) [full-end];
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
  &-main {
    flex-grow: 1;
    max-width: 100%;
    &_content {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
}
</style>
