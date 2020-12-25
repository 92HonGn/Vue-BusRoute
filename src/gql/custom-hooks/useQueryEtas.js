import { GRAPHQL_API } from "../../Constants"
import { QUERY_ETAS_SCHEMA } from '../schema'

const initEstimateStopInput = [{
  stationId: 11,
  goBack: 2,
  xno: 50861,
}]

const useQueryEtas = () => {
  const handleQuery = (inputs=initEstimateStopInput) => {
    return fetch(GRAPHQL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: QUERY_ETAS_SCHEMA,
        variables: {
          etaTargets: inputs, 
          etaLang: 'zh'
        }
      })
    })
  }

  return ({
    handleQuery,
  })
}

export default useQueryEtas