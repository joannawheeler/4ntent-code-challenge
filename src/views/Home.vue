<template>
  <div class="home">
    <div class="my-loading" v-if="gettingPlan">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>

    <v-container class="my-plan-container" v-else>
      <h1 class="text-center mb-2">WELLNESS PLAN</h1>

      <v-avatar color="indigo">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <span>
        NAME
      </span>

      <v-avatar color="indigo" class="ml-3">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <span>
        MENTOR NAME
      </span>

      <v-card class="my-plan-card mt-4">
        <v-card-text>
          <p><strong>MY INTENSION: </strong> My intension</p>
          <p><strong>WHERE AM I NOW: </strong> Where am i now</p>
          <p><strong>WHERE DO I WANT TO GO: </strong> Where do i want to go</p>
          <p><strong>WHAT DO I CARE ABOUT: </strong> What do I care about</p>
        </v-card-text>
      </v-card>

      <v-card class="my-plan-card mt-5">
        <v-card-text>
          <p><strong>PRO-ACTIVE STRATEGIES: </strong> Pro-active stratigies</p>
          <p><strong>REWARD STRATEGIES: </strong> Reward strategies</p>
          <p><strong>MAINTENENCE: </strong> Maintenence</p>
          <p><strong>SUPPORTS: </strong> Supports</p>
        </v-card-text>
      </v-card>
      <div class="text-center mt-5 mb-5">
        <v-btn color="primary" @click="printModal = true"
          >DOWNLOAD MY PLAN</v-btn
        >
      </div>
    </v-container>

    <my-print-modal v-model="printModal" @print="printNow">
      <h1 class="text-center">WELLNESS PLAN</h1>

      <v-avatar color="indigo">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <span>
        NAME
      </span>

      <v-avatar color="indigo" class="ml-3">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <span>
        MENTOR NAME
      </span>

      <br />
      <br />

      <v-card class="my-plan-card">
        <v-card-text>
          <p><strong>MY NTENSION: </strong> My ntension</p>
          <p><strong>WHERE AM I NOW: </strong> Where am i now</p>
          <p><strong>WHERE DO I WANT TO GO: </strong> Where do i want to go</p>
          <p><strong>WHAT DO I CARE ABOUT: </strong> What do I care about</p>
        </v-card-text>
      </v-card>

      <br /><br />

      <v-card class="my-plan-card">
        <v-card-text>
          <p><strong>PRO-ACTIVE STRATEGIES: </strong> Pro-active stratigies</p>
          <p><strong>REWARD STRATEGIES: </strong> Reward strategies</p>
          <p><strong>MAINTENENCE: </strong> Maintenence</p>
          <p><strong>SUPPORTS: </strong> Supports</p>
        </v-card-text>
      </v-card>
    </my-print-modal>
  </div>
</template>

<script>
import MyService from "../service";

export default {
  name: "Home",
  data() {
    return {
      printModal: false,
      myPlan: {},
      gettingPlan: false
    };
  },
  mounted() {
    this.getPlan();
  },
  methods: {
    getPlan() {
      this.gettingPlan = true;
      MyService.getMyPlan()
        .then(res => {
          this.myPlan = res.data;
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
          // simulate loading...
          setTimeout(() => {
            this.gettingPlan = false;
          }, 555);
        });
    },
    printNow() {
      window.print();
    }
  }
};
</script>

<style>
.my-plan-card {
}

@media only screen and (max-width: 600px) {
  .my-plan-card strong {
    display: block;
  }
}
</style>
