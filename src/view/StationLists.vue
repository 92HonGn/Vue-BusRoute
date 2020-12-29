<template>
  <div class="staton-lists">

    <station-detail 
      v-for="(item, i) in busData" 
      :key="item.node.id" 
      :stDetail="item"
      :estimateStatus="state.estimateStatus(i)"
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
    estimateStatusList: Object,
  },
  setup(props, context) {

    const state = reactive({

      estimateStatus: computed(() => {

        return ( index=0 ) => {
          return props.estimateStatusList[index]
        }

      })

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