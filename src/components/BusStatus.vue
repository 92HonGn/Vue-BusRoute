<template>
  <span 
    class="status" 
    :class="{ 
      isCloseTime: state.output.trim().includes('分'),
      isCome: state.output.trim().includes(':'),
      isCloseDis: state.output.trim().includes('即將到站'),
      isComing: state.output.trim().includes('進站中'),
      isOff: state.output.trim().includes('今日未營運') || state.output.trim().includes('末班駛離') || state.output.trim().includes('改道...')
     }"
  >
    {{ state.output }}
  </span>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import getEstimateStatus from '../lib/functions/getEstimateStatus';

export default {
  name: "BusStatus",
  props: {
    nowStatus: {
      type: Object,
      default: undefined,
    },
  },
  setup(props, context) {
    const state = reactive({
      nowStatus: props.nowStatus,
      output: computed(() => {
        return getEstimateStatus(props.nowStatus);
      }),
    });
    onMounted(() => {});
    return {
      state,
    };
  },
  components: {},
};
</script>


<style scoped>
</style>
