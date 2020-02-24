<template>
  <transition name="modal">
    <div class="print-modal" v-show="value">
      <transition name="zoom">
        <div
          class="modal-container"
          v-if="value"
          :style="{ width: width }"
        >
          <div class="modal-body">
            <slot></slot>
          </div>

           <div>
              <v-btn class="error" outlined @click="$emit('input', false)">Close</v-btn>
              <v-btn class="ml-20 ml-20 " outlined @click="$emit('print')">Print</v-btn>
          </div>

        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "960px"
    }
  }
};
</script>

<style>
.ml-20 {
  margin-left: 30px;
}
.print-modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background: rgba(0,0,0,0.2);
  overflow-y: auto;
}
.modal-container {
  background: white;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 20cm;
  overflow-y: auto;
}
.modal-body {
  padding: 77px;
  overflow-y: auto;
}
@media print {
  .modal-container {
    box-shadow: 0;
    margin: 0;
  }
}
@media only screen and (max-width: 600px) {
  .modal-body {
    padding: 22px;
  }
}

</style>