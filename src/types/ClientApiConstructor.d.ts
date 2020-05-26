import { VueConstructor } from 'vue';
import { MetaInfo } from 'vue-meta';
import VueRouter from 'vue-router';

declare interface ClientContext {
  appOptions: {
    metaInfo: MetaInfo;
    router: VueRouter;
  }
  router: VueRouter;
  head: MetaInfo;
}

export type ClientApiConstructor = (Vue: VueConstructor, context: ClientContext) => void;
