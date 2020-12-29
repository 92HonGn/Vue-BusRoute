<template>
  <div class="wrapper">

    <station-head 
      :stationname="state.name" 
    />

    <station-lists 
      :busData="state.rawData" 
      :estimateStatusList="state.estimateStatusList"
    />

  </div>
</template>

<script>
import { useRoute } from 'vue-router'

import { computed, reactive, onMounted, watch, watchEffect } from "vue";

import useQueryStation from '../gql/custom-hooks/useQueryStation'
import useQueryEtas from '../gql/custom-hooks/useQueryEtas'

import StationHead from "./StationHead.vue";
import StationLists from "./StationLists.vue";

export default {
  name: 'App',
  props: {
    stationId: {
      type: Number,
      default: 11,
    },
  },
  setup(props, context) {

    //用vue-router的內建hook抓取URL參數
    const route = useRoute();
    console.log(route.params);

    const state = reactive({
      data: {
        busName: "",
      },
      name: computed(() => (state.data.busName ? state.data.busName : "")),

      rawData: [],

      inputArray:[],
      inputlength:0,
      estimateStatusList:[],

      inputStationID: computed(() => {
        if (route.params.id){
          return Number(route.params.id)
        }else{
          return 1;
        }
      }),
      inputStationLang: 'zh',
    });


    const {
      handleStationQuery,
    } = useQueryStation();

    watchEffect(()=>{
      if(state.inputStationID > 0 && state.inputStationLang.length > 0){

        handleStationQuery(state.inputStationID, state.inputStationLang)
          .then(res => res.json())
          .then(result => {
            console.log(result);
            const stationResult = result.data;

            //站名標題
            state.data.busName = stationResult.station.name;
            state.rawData = stationResult.station.routes.edges;
            
            //自組陣列
            state.inputlength = stationResult.station.routes.edges.length;
            for (let i=0; i < state.inputlength; i++){
              state.inputArray.push({
                xno: Number(state.rawData[i].node.id),
                sid: state.rawData[i].sid,
                goBack: state.rawData[i].goBack,
              })    
            }
          });
          
      }
    });
  
    const {
      handleQuery,
    } = useQueryEtas();

    watch(state.inputArray, (val, prevVal) => {
      if(val.length > 0) {
        handleQuery(state.inputArray)
          .then(res => res.json())
          .then(result => {
            console.log(result);
            state.estimateStatusList = result.data.stopEstimates
          });
      }
    })
    
    onMounted(() => {
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