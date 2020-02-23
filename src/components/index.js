// Import components
import MyPrintModal from "./MyPrintModal";
import MyPlan from "./MyPlan";

export default {
  install(Vue /*, options */) {
    Vue.component("my-print-modal", MyPrintModal);
    Vue.component("my-plan", MyPlan);
  }
};
