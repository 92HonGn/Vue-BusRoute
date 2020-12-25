<template>
  <div class="staton-lists">
    <station-detail 
      v-for="(item, i) in busData" 
      :key="item.sid" 
      :stDetail="item"
      :estimateTimeData="estimateTimeData(i)"
    />
  </div>
</template>

<script>
import { reactive, onMounted, computed } from "vue";

import StationDetail from "../components/StationDetail.vue";

export default {
  name: "StationLists",
  props: {
    estimateTimeDataList: Object,
    busData: Object,
  },
  computed: {
    estimateTimeData(index=0) {
      return (index=0) => {
      // console.log(this.$props.estimateTimeDataList[index])
        return this.$props.estimateTimeDataList[index]
      }
    }
  },
  setup(props, context) {
    const state = reactive({
    });
    onMounted(() => {
    });
    return {
      state,
    };
  },
  components: {
    StationDetail,
  },
};
</script>

<style scoped>
</style>
