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
import * as Constants from "./Constants";
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
    const fetchStatus = async () => {
      const queryResult = await axios.post(
        Constants.GRAPHQL_API,
        {
          query: `
            query{
              	stopEstimates(targets: ${JSON.stringify(state.inputs)}){
                  isOperationDay #如果為false，則"今日未營運"
                  isSuspended #如果為真，則"末班駛離"
                  
                  # 以下兩者之一如果為真，則"改道..."
                  isConstruction
                  isEvent
                  
                  # 如果etas是空的，則顯示comeTime
                  comeTime
                  # etas如果有資料則依照一下邏輯
                  # etaTime < 3, "進站中"
                  # >= 3 or <= 5，則是"即將到站"
                  # > 5，則是"{N} 分"
                  etas {
                  eta
                  }
                }
            }
          `,
        }
      );
      const result = queryResult.data.data;
      console.log(result);

    };

    onMounted(() => {
      fetchStatus();
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
