<template>
  <MainLayout>
    <transition name="fade">
      <router-view :key="$route.path" />
    </transition>
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

<style lang="scss">
.fade {
  &-leave-active {
    position: absolute;
    transition: opacity ease .65s;
  }
  &-enter-active {
    position: absolute;
    transition: opacity ease .7s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
