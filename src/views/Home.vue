<template>
  <div class="home">
    <v-container class="my-plan-container">
      <h1 class="text-center">WELLNESS PLAN</h1>

      <v-avatar color="indigo">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <span>
        NAME
      </span>

      <v-avatar color="indigo">
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

      <br />
      <div class="text-center">
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

      <v-avatar color="indigo">
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
export default {
  name: "Home",
  data() {
    return {
      printModal: false
    };
  },
  methods: {
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
