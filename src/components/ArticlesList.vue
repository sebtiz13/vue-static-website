<template>
  <section>
    <article
      v-for="post in posts"
      :key="post.id"
      class="l-article"
    >
      <header class="l-article_header">
        <g-link
          v-if="post.thumbnail"
          :to="post.path"
          class="l-article_img"
        >
          <g-image :src="post.thumbnail" />
        </g-link>
        <g-link
          v-if="post.categories.length >= 1"
          class="l-article_category"
          :to="post.categories[0].path"
        >
          {{ post.categories[0].title }}
        </g-link>
      </header>
      <h2 class="l-article_title">
        <g-link :to="post.path">
          {{ post.title }}
        </g-link>
      </h2>
      <div class="l-article_content">
        <p>
          {{ post.excerpt }}
        </p>
      </div>
      <footer class="l-article_footer">
        <date-time
          :datetime="post.date"
        />
        <g-link :to="post.path">
          Read more
          <i
            class="sb-chevron-right"
            aria-hidden="true"
          />
        </g-link>
      </footer>
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { BlogPost } from '@/types/Nodes';

@Component
export default class ArticlesList extends Vue {
  @Prop(Array) posts!: BlogPost[]
}
</script>

<style lang="scss">
.l-article {
  margin-bottom: 50px;
  &_header {
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
  }
  &_img {
    display: block;
    height: 300px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &_category {
    display: inline-block;
    padding: 5px 10px;
    color: $color-white;
    background-color: $palette-blue-600;
    transition: background-color .3s;
    &:hover {
      color: $color-white;
      background-color: $palette-blue-700;
    }
  }
  &_img + &_category {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &_title {
    margin-bottom: 10px;
  }
  &_content {
    padding-left: 10px;
    padding-right: 10px;
  }
  &_footer {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 20px 10px 5px 10px;
    border-bottom: 1px solid $color-black;
  }
}
</style>
