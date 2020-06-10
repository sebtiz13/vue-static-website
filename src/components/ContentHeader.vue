<template>
  <header class="header">
    <slot
      v-if="$slots.default"
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
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ContentHeader extends Vue {
  @Prop(String) readonly title!: string
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
  @include md {
    max-height: 400px;
    &_title {
      font-size: 4.5rem;
    }
  }
}
</style>
