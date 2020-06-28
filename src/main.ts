/**
 * This is the main.ts file. Import global CSS and scripts here.
 * Learn more: gridsome.org/docs/client-api
 */

/**
  * Register hooks for class components
  */
import '@/class-component-hooks';

/**
 * Types imports
 */
import { ClientApiConstructor } from '@/types/ClientApiConstructor';

/**
 * Global css imports
 */
import '@/assets/scss/base.scss';

/**
 * Layout imports
 */
import DefaultLayout from '@/layouts/Default.vue';
/**
 * Ui components imports
 */
import Btn from '@/components/ui/Btn.vue';
import DateTime from '@/components/ui/DateTime.vue';
import NavMenu from '@/components/ui/NavMenu.vue';
import SocialLink from '@/components/ui/SocialLink.vue';

/**
 * Client API constructor
 */
const client: ClientApiConstructor = (Vue) => {
  Vue.component('Btn', Btn);
  Vue.component('DateTime', DateTime);
  Vue.component('NavMenu', NavMenu);
  Vue.component('SocialLink', SocialLink);
  Vue.component('Layout', DefaultLayout);
};
export default client;
