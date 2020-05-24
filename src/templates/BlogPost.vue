<template>
  <Layout :title="$page.blogPost.title">
    <template
      v-if="$page.blogPost.thumbnail"
      slot="header"
    >
      <g-image
        :src="$page.blogPost.thumbnail"
      />
    </template>
    <div
      slot="content"
      class="layout-main_content blogPost_content"
      v-html="$page.blogPost.content"
    />
  </layout>
</template>

<page-query>
  query($id: ID!) {
    blogPost(id: $id) {
      title
      thumbnail
      categories
      date
      content
    }
  }
</page-query>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';
import { BlogPost } from '@/types/BlogPost';

@Component
export default class BlogPostPage extends Vue {
  private $page!: {
    blogPost: BlogPost;
  };

  metaInfo(): MetaInfo {
    return {
      title: this.$page.blogPost.title,
    };
  }
}
</script>

<style lang="scss">
.blogPost_content {
  h2 {
    border-bottom: 1px solid $palette-cyan-800;
    margin-top: 20px;
    margin-bottom: 20px;
    @extend .h1-size;
    font-weight: 100;
    line-height: 1.5;
  }
  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  p {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .g-image {
    max-width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    &.fullWidth,
    &.alignfull {
      width: 100%;
    }
  }

  pre {
    padding: 5px;
    max-width: 100%;
    overflow: auto;
  }
}
</style>
