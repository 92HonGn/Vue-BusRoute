
export const QUERY_ETAS_SCHEMA = `
  query QUERY_ETAS($etaTargets: [EstimateStopInput!]!, $etaLang: String!){
    stopEstimates(targets: $etaTargets, lang: $etaLang){
      isOperationDay
      isSuspended
      isConstruction
      isEvent
      xno
      comeTime
      etas {
        eta
      }
    }
  }
`;