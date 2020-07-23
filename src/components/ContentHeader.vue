<template>
  <header class="header">
    <slot
      v-if="$slots.default"
    />
    <g-image
      v-else-if="thumbnail"
      :src="thumbnail"
      :alt="title"
    />
    <g-image
      v-else
      src="@/assets/headers/default-header.jpg"
      :alt="title"
    />
    <div class="header_container">
      <h1 class="header_title">
        {{ title }}
      </h1>
    </div>
    <div
      v-if="$slots.headerFooter"
      class="header_footer"
    >
      <div class="header_footer-container">
        <slot name="headerFooter" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Image } from '@/types/Image';

@Component
export default class ContentHeader extends Vue {
  @Prop(String) readonly title!: string

  @Prop({ type: Object }) private readonly thumbnail!: Image
}
</script>

<style lang="scss">
.header {
  position: relative;
  overflow: hidden;
  height: 50vh;
  max-height: 200px;
  & > img {
    min-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  &_container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    color: $color-white;
    text-shadow: 0 0 4px $color-black;
    background-color: rgba($color-black, .5);
  }
  &_title {
    font-weight: 100;
  }

  &_footer {
    background-color: $palette-blue-grey-100;
    line-height: 2.5rem;
    padding: 5px 0;
    width: 100%;

    &-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  @include md {
    color: $color-white;
    max-height: 400px;
    &_title {
      font-size: 4.5rem;
    }
    &_footer {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba($color-black, .6);
      &-container {
        flex-wrap: nowrap;
      }
    }
  }
}
</style>
