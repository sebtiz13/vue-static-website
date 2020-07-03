<template>
  <section class="content-list">
    <div
      v-for="(content, key) in contents"
      :key="key"
      class="content-list_entry"
    >
      <article class="content-list_container">
        <figure class="content-list_thumbnail">
          <g-image
            v-if="content.thumbnail !== null"
            :src="content.thumbnail"
          />
        </figure>
        <main class="content-list_content">
          <h2 class="content-list_title">
            {{ content.title }}
          </h2>
          <div
            class="content-list_description"
            v-html="content.content"
          />
        </main>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ContentList extends Vue {
  @Prop(Array) private readonly contents!: Record<string, unknown>[];
}
</script>

<style lang="scss">
.content-list {
  display: grid;
  grid-gap: 10px;
  @include md {
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  }
  @include xl {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
  &_entry {
    padding-top: 8px;
    padding-bottom: 8px;
    @include md {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
  &_container{
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    background-color: $color-white;
    box-shadow: rgba(0, 0, 0, 0.27) 0 0 9px;
  }
  &_thumbnail {
    height: 180px;
    width: 100%;
    img {
      display: block;
      height: 100%;
      width: 100%;
      border: none;
      object-fit: cover;
      background-color: $palette-blue-grey-100;
    }
  }
  &_content {
    padding: 20px;
    flex-grow: 1;
  }
  &_title {
    margin-bottom: 15px;
    padding-bottom: 10px;
    font-size: 2rem;
    border-bottom: 1px solid #00838f;
  }
}
</style>
