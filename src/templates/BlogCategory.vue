<template>
  <Layout :title="$page.blogCategory.title">
    <articles-list
      v-if="posts !== null"
      :posts="posts"
    />
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
  }
</page-query>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BlogCategory, NodeRelations, BlogPost } from '@/types/Nodes';
import ArticlesList from '@/components/ArticlesList.vue';

@Component({
  components: {
    ArticlesList,
  },
})
export default class BlogCategoryPage extends Vue {
  private $page!: {
    blogCategory: BlogCategory & NodeRelations<BlogPost>
  };

  get posts(): BlogPost[] | null {
    if (this.$page.blogCategory.belongsTo.edges.length >= 1) {
      return this.$page.blogCategory.belongsTo.edges.map(({ node }) => ((node)));
    }
    return null;
  }
}
</script>
