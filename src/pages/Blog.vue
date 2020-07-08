<template>
  <Layout :title="$metaInfo.title">
    <template slot="content">
      <nav-menu
        :menu-links="categories"
      />
      <div class="layout-main_content layout_content">
        <h2 class="content-title main-title">
          Latest articles
        </h2>
        <articles-list :posts="posts" />
      </div>
    </template>
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
  allBlogCategory(sortBy: "order", order: ASC) {
    edges {
      node {
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
import {
  BlogPost, BlogPostConnection, BlogCategory, BlogCategoryConnection,
} from '@/types/Nodes';
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
    allBlogCategory: BlogCategoryConnection;
  };

  get posts(): BlogPost[] {
    return getNodes(this.$page.allBlogPost);
  }

  get categories(): BlogCategory[] {
    return getNodes(this.$page.allBlogCategory);
  }

  metaInfo(): MetaInfo {
    return {
      title: 'Blog',
    };
  }
}
</script>
