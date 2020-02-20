<template>
  <v-app id="wellness">
    <v-content class="d-flex flex-column justify-center align-center ma-8">
      <v-container class="mb-3">
        <v-row justify="center">
          <h1 class="title py-1 px-3 mb-3">WELLNESS PLAN</h1>
        </v-row>
      </v-container>
      <v-container class="mb-3" fluid>
            <v-row align="center">
                <v-col cols="2">
                    <v-avatar>
                      <img
                        src="https://www.placecage.com/c/200/300"
                        alt="nic"
                      >
                    </v-avatar>
                </v-col>
                <v-col cols="3">
                  <strong class="align-self-center" v-html="newClientInfo.name"></strong>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="2">
                    <v-avatar>
                      <img
                        src="https://placekeanu.com/200/150"
                        alt="keanu"
                      >
                    </v-avatar>
                </v-col>
                <v-col cols="3">
                  <strong class="align-self-center" v-html="newClientInfo.mentor"></strong>
                </v-col>
            </v-row>
        </v-container>
      <WellnessForm v-for="form in formData" :key="form.id" :form-data="form" />
      <v-container class="mb-3">
        <v-row justify="center">
          <v-btn @click="downloadPdf">Download My Plan</v-btn>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
import WellnessForm from './components/WellnessForm.vue'

export default {
  name: 'App',
  components: {
    WellnessForm
  },
  data: () => ({
    newClientInfo: [],
    formData: [],
  }),
  mounted() {
    axios
      .get('/mock.json')
      .then(response => {
        this.newClientInfo = response.data.client;
        this.formData = response.data.forms;
      });
  },
  methods: {
    downloadPdf: function() {
      console.log("D'oh, couldn't figure this out yet!");
      // this.$htmlToPaper('wellness');
    }
  }
};
</script>

<style scoped>
.title{
  border-radius: 4px;
  border: solid 2px #b2b2b2;
  max-width: 200px;
}
.v-subheader{
  padding: 0px;
}
</style>