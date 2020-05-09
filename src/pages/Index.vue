<template>
  <Layout title="Welcome to my world !">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a
        href="https://gridsome.org/docs/"
        target="_blank"
        rel="noopener"
      >
        Gridsome Docs
      </a>
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </a>
    </p>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component
export default class HomePage extends Vue {
  // eslint-disable-next-line class-methods-use-this
  metaInfo(): MetaInfo {
    return {
      title: 'Hello world !',
    };
  }
}
</script>
