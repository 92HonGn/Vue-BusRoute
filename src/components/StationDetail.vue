<template>
  <div class="station-detail">
    <div class="bus-name">
      <div>
        <span class="bus-num">{{ routeName }}</span>
        <span class="bus-route">{{ `往 ${destination}` }}</span>
      </div>
      <bus-status :nowstatus="estimateTimeData" />
    </div>

    <div class="bus-status">
    </div>
    <!-- ex: {
            "sid": 7202,
            "goBack": 1,
            "node": {
              "id": "108",
              "departure": "港尾",
              "destination": "南開科技大學校區"
            }
    }, -->
  </div>
</template>

<script>
import axios from "axios";
import * as Constants from "../Constants";
import { reactive, onMounted, computed } from "vue";
import BusStatus from './BusStatus.vue';

export default {
  name: "StationDetail",
  props: {
    estimateTimeData: Object,
    stDetail: Object,
  },
  watch: {
    ['this']() {
      console.log(this.$props)
    }
  },
  computed: {
    routeName() {
    // console.log(this.$props)
    // console.log(this.$props.stDetail)
      return this.$props.stDetail.node.name
    },
    destination() {
      return this.$props.stDetail.node.destination
    },
    // estimateTimeData() {
    //   return {}
    //   // return this.$props.
    // },
  },
  setup(props, context) {
  },
  components: {
    BusStatus
  },
};
</script>


<style scoped>
.bus-name {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
