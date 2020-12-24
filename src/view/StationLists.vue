<template>
  <div class="staton-lists">
    <station-detail 
      v-for="item in busData" 
      :key="item.sid" 
      :stDetail="item" 
      :inputTarget="inputData"
      />
  </div>
</template>

<script>
import { reactive, onMounted, computed } from "vue";

import StationDetail from "../components/StationDetail.vue";

export default {
  name: "StationLists",
  props: {
    busData: Object,
    inputData: Object,
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
