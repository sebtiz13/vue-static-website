<template>
  <Layout>
    <h1>About us</h1>
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
  // eslint-disable-next-line class-methods-use-this
  metaInfo(): MetaInfo {
    return {
      title: 'About us',
    };
  }
}
</script>
