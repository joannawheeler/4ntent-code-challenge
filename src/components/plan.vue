<template>
  <div>
    <h1 class="text-center mb-2">WELLNESS PLAN</h1>
    <v-avatar color="indigo">
      <v-icon dark>mdi-circle</v-icon>
    </v-avatar>
    <span>
      {{ plan.name }}
    </span>

    <v-avatar color="indigo" class="ml-3">
      <v-icon dark>mdi-circle</v-icon>
    </v-avatar>
    <span>
      {{ plan.mentor }}
    </span>

    <v-card class="plan-card mt-4" outlined>
      <v-card-text>
        <p><strong>MY INTENSION: </strong> {{ plan.my_intension }}</p>
        <p><strong>WHERE AM I NOW: </strong> {{ plan.where_now }}</p>
        <p><strong>WHERE DO I WANT TO GO: </strong> {{ plan.where_to_go }}</p>
        <p>
          <strong>WHAT DO I CARE ABOUT: </strong> {{ plan.what_care_about }}
        </p>
      </v-card-text>
    </v-card>

    <v-card class="plan-card mt-5" outlined >
      <v-card-text>
        <p>
          <strong>PRO-ACTIVE STRATEGIES: </strong>
          {{ plan.pro_active_strageties }}
        </p>
        <p><strong>REWARD STRATEGIES: </strong> {{ plan.reward_strategies }}</p>
        <p><strong>MAINTENENCE: </strong> {{ plan.maintenence }}</p>
        <p><strong>SUPPORTS: </strong> {{ plan.supports }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    plan: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.plan-card {
  text-align: left;

}
@media only screen and (max-width: 600px) {
  .plan-card strong {
    display: block;
  }
}
</style>