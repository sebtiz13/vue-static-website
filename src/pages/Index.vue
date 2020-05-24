<template>
  <Layout title="Welcome to my world !">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a
        href="https://gridsome.org/docs/"
        target="_blank"
        rel="noopener"
      >
        Gridsome Docs
      </a>
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </a>
    </p>
    <article
      v-for="post in posts"
      :key="post.id"
    >
      <g-link :to="post.path">
        {{ post.title }}
      </g-link>
      <br>
      <br>
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
          categories
          excerpt
          timeToRead
          date(format: "MMM D YYYY")
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
