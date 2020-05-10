/**
 * This is the main.ts file. Import global CSS and scripts here.
 * Learn more: gridsome.org/docs/client-api
 */

import './class-component-hooks';

/**
 * Types imports
 */
import { ClientApiConstructor } from './types';

/**
 * Global css imports
 */
import './assets/scss/base.scss';

/**
 * Layout imports
 */
import DefaultLayout from '~/layouts/Default.vue';
/**
 * Ui components imports
 */
import Btn from '~/components/ui/Btn.vue';

/**
 * Client API constructor
 */
const client: ClientApiConstructor = (Vue) => {
  Vue.component('Btn', Btn);
  Vue.component('Layout', DefaultLayout);
};
export default client;
