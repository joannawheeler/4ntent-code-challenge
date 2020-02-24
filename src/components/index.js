import PrintModal from "./printModal";
import Plan from './plan';
export default {
  install(Vue /*, options */) {
    Vue.component("print-modal", PrintModal);
    Vue.component("plan", Plan);
  }
};