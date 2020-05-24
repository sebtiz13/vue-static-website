<template>
  <Layout title="Welcome to my world !">
    <h2 class="content-title main-title">
      Latest articles
    </h2>
    <article
      v-for="post in posts"
      :key="post.id"
    >
      <g-link :to="post.path">
        {{ post.title }}
      </g-link>
    </article>
  </Layout>
</template>

<page-query>
  query {
    allBlogPost {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</page-query>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';
import { BlogPost } from '@/types/BlogPost';

@Component
export default class HomePage extends Vue {
  private $page!: {
    allBlogPost: {
      edges: Array<{
        node: BlogPost;
      }>;
    };
  };

  get posts(): Array<BlogPost> {
    return this.$page.allBlogPost.edges.map(({ node }) => (node));
  }

  metaInfo(): MetaInfo {
    return {
      title: 'Hello world !',
    };
  }
}
</script>
