import { VueConstructor } from 'vue';
import { MetaInfo } from 'vue-meta';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

declare interface ClientContext {
  appOptions: {
    metaInfo: MetaInfo;
    router: VueRouter;
    i18n: VueI18n;
  }
  router: VueRouter;
  head: MetaInfo;
}

export type ClientApiConstructor = (Vue: VueConstructor, context: ClientContext) => void;
