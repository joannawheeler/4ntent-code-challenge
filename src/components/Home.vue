<template>
<v-app>
  <div class="home">

<div class="my-loading" v-if="loadingPlan">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-container class="my-plan-container" v-else>
      <plan :plan="plan"></plan>
        <div class="text-center">
           <v-btn class="ma-2" @click="printModal = true"  outlined color="indigo">DOWNLOAD MY PLAN</v-btn>
        </div>
    </v-container>
    <print-modal v-model="printModal" @print="printNow">
      <plan :plan="plan"></plan>
    </print-modal>
  </div>
</v-app>
</template>

<script>
import { getPlan  } from '../services/axiosCalls';
export default {
  name: "Home",
  components: {},
  data() {
    return {
      printModal: false,
      plan: {},
      loadingPlan: true
    };
  },
  mounted() {
    this.getPlan();
  },
  methods: {
    async getPlan() {
      this.loadingPlan = true;
      try {
      let plan = await getPlan('plan.json');
      this.loadingPlan= false ;
      console.log(plan.data)
      this.plan = plan.data;
        
      } catch (error) {
          console.log(error);
        
      }
    },
    printNow() {
      window.print();
    }
  }
};
</script>

<style>
.plan-card {
  text-align: left;
  border-width : 2px 

}
@media only screen and (max-width: 600px) {
  .my-plan-card strong {
    display: block;
  }
}
</style>