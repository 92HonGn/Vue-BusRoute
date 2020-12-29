<template>
  <router-view />
</template>

<script>
import { computed, reactive, onMounted, watch, watchEffect } from "vue";

export default {
  name: 'App',
  setup() {
    const state = reactive({
      inputArray: [],
    });
    watchEffect(()=>{
    });
    watch(state.inputArray, (val, prevVal) => {
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