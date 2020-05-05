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
 * Layout imports
 */
import DefaultLayout from '~/layouts/Default.vue';

/**
 * Client API constructor
 */
const client: ClientApiConstructor = (Vue) => {
  Vue.component('Layout', DefaultLayout);
};
export default client;
