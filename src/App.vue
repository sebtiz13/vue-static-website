<template>
  <MainLayout>
    <router-view :key="$route.path" />
  </MainLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainLayout from '@/layouts/Main.vue';

@Component({
  components: {
    MainLayout,
  },
})
export default class App extends Vue {
}
</script>
