<template>
  <div class="station-detail">
    <div class="bus">
      <span class="bus-num">{{ state.routeName }}</span>
      <span class="bus-route">{{ state.routeDestination }}</span>
      <bus-status :nowStatus="estimateStatus" />
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
import { reactive, onMounted, computed } from "vue";
import BusStatus from "./BusStatus.vue";

export default {
  name: "StationDetail",
  props: {
    stDetail: Object,
    estimateStatus: Object,
  },
  setup(props, context) {
    const state = reactive({
      routeName: computed(() => {
        return props.stDetail.node.id
      }),
      routeDestination: computed(() => {
        return props.stDetail.node.destination
      })
    });
    return {
      state,
    };
  },
  components: {
    BusStatus,
  },
};
</script>


<style scoped>
</style>