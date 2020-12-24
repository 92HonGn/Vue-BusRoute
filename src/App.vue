<template>
  <div class="wrapper">
    <station-head 
      :stationname="state.name" 
    />
    <station-lists 
      :busData="state.rawData" 
      :inputData="state.inputAarray" 
    />
  </div>
</template>

<script>
import axios from "axios";
import * as Constants from "./Constants";
import { computed, reactive, onMounted } from "vue";
import StationHead from "./view/StationHead.vue";
import StationLists from "./view/StationLists.vue";

export default {
  name: 'App',
  setup() {
    const state = reactive({
      data: {
        busName: "",
      },
      name: computed(() => (state.data.busName ? state.data.busName : "")),
      rawData: [],
      inputAarray:[],
      inputlength:0,
    });

    const fetchData = async () => {
      const queryResult = await axios.post(
        Constants.GRAPHQL_API,
        {
          query: `
            query{
              station(id: 11, lang: "zh") {
                id
                name
                routes {
                  edges {
                    sid
                    goBack
                    node {
                      id
                      departure
                      destination     
                    }
                  }
                }
              }
            }
          `,
        }
      );
        const result = queryResult.data.data;
        state.data.busName = result.station.name;
        state.rawData = result.station.routes.edges;
        console.log(state.rawData);


        state.inputlength = result.station.routes.edges.length;
        for (let i=0; i < state.inputlength; i++){
          state.inputAarray.push({
            xno: state.rawData[i].node.id,
            sid: state.rawData[i].sid,
            goBack: state.rawData[i].goBack,
          })
        }
      };

      onMounted(() => {
        fetchData();
      });

      return {
        state,
      };
  },
  components: {
    StationHead,
    StationLists,
  },
};
</script>
