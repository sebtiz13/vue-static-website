<template>
  <content-list :contents="Conferences" />
</template>

<static-query>
query Conferences {
  allConferences {
    edges {
      node {
        title
        thumbnail
        content
      }
    }
  }
}
</static-query>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ConferencesConnection, Conferences } from '@/types/Nodes';
import getNodes from '@/helpers/getNodes';
import ContentList from '@/components/ContentList.vue';

@Component({
  components: {
    ContentList,
  },
})
export default class ConferencesList extends Vue {
  private $static!: {
    allConferences: ConferencesConnection
  };

  get Conferences(): Conferences[] {
    return getNodes(this.$static.allConferences);
  }
}
</script>
