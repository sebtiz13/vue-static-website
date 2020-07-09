<template>
  <Layout
    :title="$page.sitePages.title"
  >
    <ContentHeader
      v-if="$page.sitePages.thumbnail"
      slot="contentHeader"
      :title="$page.sitePages.title"
    >
      <g-image
        :src="$page.sitePages.thumbnail"
      />
    </ContentHeader>
    <div
      slot="content"
      class="layout-main_content"
    >
      <VueRemarkContent class="layout_content" />
    </div>
  </Layout>
</template>

<page-query>
query MarkdownPage($id: ID!) {
  sitePages(id: $id) {
    title
    thumbnail
  }
}
</page-query>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';
import { sitePages } from '@/types/Nodes';
import ContentHeader from '@/components/ContentHeader.vue';

@Component({
  components: {
    ContentHeader,
  },
})
export default class sitePagesPage extends Vue {
  private $page!: {
    sitePages: sitePages;
  };

  metaInfo(): MetaInfo {
    return {
      title: this.$page.sitePages.title,
    };
  }
}
</script>
