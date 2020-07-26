<template>
  <Layout title="Welcome to my world !">
    <h2 class="content-title main-title">
      {{ $t('latest-articles') }}
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
        categories(limit: 1) {
          path
          title
        }
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
import { BlogPost, BlogPostConnection } from '@/types/Nodes';
import getNodes from '@/helpers/getNodes';
import ArticlesList from '@/components/ArticlesList.vue';

@Component({
  components: {
    ArticlesList,
  },
})
export default class HomePage extends Vue {
  private $page!: {
    allBlogPost: BlogPostConnection;
  };

  get posts(): BlogPost[] {
    return getNodes(this.$page.allBlogPost);
  }

  metaInfo(): MetaInfo {
    return {
      title: 'Hello world !',
    };
  }
}
</script>
