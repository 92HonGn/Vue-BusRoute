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
import axios from "axios";
import * as Constants from "../Constants";
import { reactive, onMounted, computed } from "vue";

export default {
  name: "StationDetail",
  props: {
    stDetail: Object,
    inputTarget: Object,
  },
  setup(props, context) {
    const state = reactive({
      xno: props.stDetail.node.id,
      routename: props.stDetail.node.destination,
      inputs: props.inputTarget
    });
    
    // const fetchStatus = async () => {
    //   const queryResult = await axios.post(
    //     Constants.GRAPHQL_API,
    //     {
    //       query: Constants.QUERY_ETAS_SCHEMA,
    //       variables: { etaTargets: JSON.stringify(state.inputs), etaLang: "zh"},
    //     }
    //   );
    //   const result = queryResult.data.data;
    //   console.log(result);
    // };

    // onMounted(() => {
    //   fetchStatus();
    // });

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
