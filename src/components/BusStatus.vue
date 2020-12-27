<template>
  <span 
    class="status" 
    :class="{ isOff: !state.isOperationDay }">
    {{ output }}
  </span>
</template>

<script>
import { reactive, computed, onMounted, watch } from "vue";
import getEstimateTimeStatus from '../lib/functions/getEstimateTimeStatus'

export default {
  name: "BusStatus",
  props: {
    nowstatus: {
      type: Object,
      default: undefined,
    },
  },
  setup(props, context) {
    const state = reactive({
      nowstatus: props.nowstatus,
    });

    const output = computed(() => {
      return getEstimateTimeStatus(props.nowstatus)
    });
    
    return {
      state,
      output,
    };
  },
  components: {},
};
</script>


<style scoped>
</style>
