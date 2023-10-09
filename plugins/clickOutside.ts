import vClickOutside from "~/utils/plugins/click-outside";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", vClickOutside);
});
