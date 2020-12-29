<template>
  <div class="staton-head">
    <station-name :busname="stationname" />
  </div>
</template>

<script>
import StationName from "../components/StationName.vue";

export default {
  name: "StationHead",
  props: {
    stationname: String,
  },
  setup() {},
  components: {
    StationName,
  },
};
</script>

<style scoped>
</style>