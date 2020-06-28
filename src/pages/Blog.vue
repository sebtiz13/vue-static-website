<template>
  <Layout :title="$metaInfo.title">
    <h2 class="content-title main-title">
      Latest articles
    </h2>
    <articles-list :posts="posts" />
  </Layout>
</template>

<page-query>
  query Posts {
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
import NavMenu from '@/components/ui/NavMenu.vue';
import ArticlesList from '@/components/ArticlesList.vue';

@Component({
  components: {
    NavMenu,
    ArticlesList,
  },
})
export default class BlogPage extends Vue {
  private $page!: {
    allBlogPost: BlogPostConnection;
  };

  get posts(): BlogPost[] {
    return getNodes(this.$page.allBlogPost);
  }

  metaInfo(): MetaInfo {
    return {
      title: 'Blog',
    };
  }
}
</script>
