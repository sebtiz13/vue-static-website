<template>
  <Layout :title="title">
    <template slot="header">
      <g-image
        alt="Example image"
        src="@/assets/headers/about-header.jpg"
      />
    </template>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Error doloremque omnis animi, eligendi magni a voluptatum, vitae,consequuntur rerum
      illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.
    </p>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component
export default class AboutPage extends Vue {
  private title = 'About us';

  metaInfo(): MetaInfo {
    return {
      title: this.title,
    };
  }
}
</script>
