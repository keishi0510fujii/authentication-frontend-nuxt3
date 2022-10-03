import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library, config } from '@fortawesome/fontawesome-svg-core';
export default defineNuxtPlugin((nuxtApp) => {
  config.autoAddCss = false;
  library.add(fas, fab);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
