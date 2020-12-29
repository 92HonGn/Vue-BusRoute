export const QUERY_STATION_SCHEMA = `
  query QUERY_STATION($stationID: Int!, $stationLang: String!){
    station(id: $stationID, lang: $stationLang) {
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
`;


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