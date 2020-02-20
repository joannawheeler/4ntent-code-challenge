<template>
    <v-card>
        <v-container class="wellness-form mb-3" fluid>
            <v-row v-for="item in formData" :key="item.id" align="center">
                <v-col cols="4">
                    <v-subheader>{{ item.label }}</v-subheader>
                </v-col>
                <v-col cols="8">
                    <v-text-field v-model="item.data"></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'WellnessForm',
  props: {
      formData: Array
  }
})
</script>

<style scoped>

.wellness-form{
  border: solid 5px #b2b2b2;
  width: 600px;
}
.v-subheader{
  padding: 0px;
}
</style>