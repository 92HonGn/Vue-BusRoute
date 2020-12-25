import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')


export const QUERY_ETAS_SCHEMA = `
  query QUERY_ETAS($etaTargets: [EstimateStopInput!]!, $etaLang: String!){
    stopEstimates(targets: {$etaTargets}, lang: $etaLang){
      isOperationDay #如果為false，則"今日未營運"
      isSuspended #如果為真，則"末班駛離"
                    
      # 以下兩者之一如果為真，則"改道..."
      sConstruction
      isEvent
                    
      # 如果etas是空的，則顯示comeTime
      comeTime
      # etas如果有資料則依照一下邏輯
      # etaTime < 3, "進站中"
      # >= 3 or <= 5，則是"即將到站"
      # > 5，則是"{N} 分"
      etas {
        eta
      }
    }
  }
`;