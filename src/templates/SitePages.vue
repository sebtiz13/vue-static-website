<template>
  <Layout :title="$page.sitePages.title">
    <ContentHeader
      v-if="$page.sitePages.thumbnail"
      slot="contentHeader"
      :title="$page.sitePages.title"
    >
      <g-image
        :src="$page.sitePages.thumbnail"
      />
    </ContentHeader>
    <template slot="content">
      <div
        v-if="$page.sitePages.content.length > 1"
        class="layout-main_content sitePages_content"
        v-html="$page.sitePages.content"
      />
    </template>
  </layout>
</template>

<page-query>
  query($id: ID!) {
    sitePages(id: $id) {
      publicPath
      title
      content
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

  get layout(): string {
    return this.$page.sitePages.layout;
  }
}
</script>

<style lang="scss">
.sitePages_content {
  h2 {
    border-bottom: 1px solid $palette-cyan-800;
    padding-top: 40px;
    margin-bottom: 20px;
    @extend %h1-size;
    font-weight: 100;
    line-height: 1.5;
  }
  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  p {
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: center;
  }
}
</style>
