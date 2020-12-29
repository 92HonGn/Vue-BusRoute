<template>
  <div class="station-name">
    站名：{{ busname }}
  </div>
</template>

<script>
export default {
  name: "StationName",
  props: {
    busname: String,
  },
  components: {},
};
</script>


<style scoped>
</style>