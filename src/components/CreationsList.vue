<template>
  <content-list :contents="creations" />
</template>

<static-query>
query Creations {
  allCreations {
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
import { CreationsConnection, Creations } from '@/types/Nodes';
import getNodes from '@/helpers/getNodes';
import ContentList from '@/components/ContentList.vue';

@Component({
  components: {
    ContentList,
  },
})
export default class CreationsList extends Vue {
  private $static!: {
    allCreations: CreationsConnection
  };

  get creations(): Creations[] {
    return getNodes(this.$static.allCreations);
  }
}
</script>
