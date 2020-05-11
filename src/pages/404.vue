<template>
  <Layout>
    <template slot="header">
      <g-image
        alt="Example image"
        src="~/assets/headers/not_found-header.png"
      />
    </template>
    <h2 class="content-title main-title">
      Hey are you lost ?
    </h2>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component
export default class ErrorPage extends Vue {
  metaInfo(): MetaInfo {
    return {
      title: 'Page not found',
    };
  }
}
</script>
