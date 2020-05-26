<template>
  <Layout title="Welcome to my world !">
    <h2 class="content-title main-title">
      Latest articles
    </h2>
    <articles-list :posts="posts" />
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
          thumbnail
          categories
          date
          excerpt
        }
      }
    }
  }
</page-query>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';
import { BlogPost } from '@/types/BlogPost';
import ArticlesList from '@/components/ArticlesList.vue';

@Component({
  components: {
    ArticlesList,
  },
})
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
