import { GRAPHQL_API } from "../../lib/variables/constants"
import { QUERY_ETAS_SCHEMA } from '../schema'

const initEstimateStopInput = [{
  xno: 108,
  sid: 7202,
  goBack: 1,
}]
const initEstimateStopLang = "zh";

const useQueryEtas = () => {
  const handleQuery = (inputs = initEstimateStopInput, inputsLang = initEstimateStopLang) => {
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
          etaLang: inputsLang
        }
      })
    })
  }

  return ({
    handleQuery,
  })
}

export default useQueryEtas