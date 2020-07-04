<template>
  <Layout :title="$page.blogCategory.title">
    <template slot="content">
      <nav-menu
        :menu-links="categories"
      />
      <div class="layout-main_content layout_content">
        <articles-list
          v-if="posts !== null"
          :posts="posts"
        />
      </div>
    </template>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    blogCategory(id: $id) {
      title
      belongsTo {
        edges {
          node {
            ... on BlogPost {
              id
              title
              path
              thumbnail
              categories(limit: 1) {
                title
              }
              date
              excerpt
            }
          }
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
import {
  BlogCategory, NodeRelations, BlogPost, BlogCategoryConnection,
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
export default class BlogCategoryPage extends Vue {
  private $page!: {
    blogCategory: BlogCategory & NodeRelations<BlogPost>
    allBlogCategory: BlogCategoryConnection;
  };

  get posts(): BlogPost[] | null {
    if (this.$page.blogCategory.belongsTo.edges.length >= 1) {
      return getNodes(this.$page.blogCategory.belongsTo);
    }
    return null;
  }

  get categories(): BlogCategory[] {
    return getNodes(this.$page.allBlogCategory);
  }
}
</script>
