<template>
  <span 
    class="status" 
    :class="{ isOff: !state.isOperationDay }">
    {{ output }}
  </span>
</template>

<script>
import { reactive, computed, onMounted } from "vue";

export default {
  name: "BusStatus",
  props: {
    nowstatus: Object,
  },
  setup(props, context) {
    const state = reactive({
      isOperationDay: props.nowstatus.isOperationDay,
      isSuspended: props.nowstatus.isSuspended,
      isConstruction: props.nowstatus.isConstruction,
      isEvent: props.nowstatus.isEvent,
      comeTime: props.nowstatus.comeTime,
      etas: props.nowstatus.etas,
    });
    const output = computed(() => {
      if (state.etas.length === 0) {
        return state.comeTime;
      } else if (state.etas.length !== 0) {
        if (state.etas.eta < 3) {
          return "進站中";
        } else if (state.etas.eta >= 3 && state.etas.eta <= 5) {
          return "即將到站";
        } else if (state.etas.eta > 5) {
          return `${state.etas.eta}`;
        } else {
          console.log("預估時間");
        }
      } else if (state.isOperationDay === false) {
        return "今日未營運";
      } else if (state.isSuspended === true) {
        return "末班駛離";
      } else if (state.isConstruction === true || state.isEvent === true) {
        return "改道...";
      } else {
        console.log("路線狀態");
      }
    });
    onMounted(() => {});
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
