<template>
  <div class="station-detail">
    <div class="bus-name">
      <span class="bus-num">{{ state.xno }}</span>
      <span class="bus-route">{{ state.routename }}</span>
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
import { reactive, onMounted, computed } from "vue";

export default {
  name: "StationDetail",
  props: {
    stdetail: Object,
  },
  setup(props, context) {
    const state = reactive({
      xno: props.stdetail.node.id,
      routename: props.stdetail.node.destination,
    });

    onMounted(() => {
    });

    return {
      state,
    };
  },
  components: {
  },
};
</script>


<style scoped>
</style>
