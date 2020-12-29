import { GRAPHQL_API } from "../../lib/variables/constants"
import { QUERY_STATION_SCHEMA } from '../schema'


const initStationID = 1;
const initStationLang = "zh";


const useQueryStation = () => {
  const handleStationQuery = (stationid = initStationID, stationlang = initStationLang) => {
    return fetch( GRAPHQL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: QUERY_STATION_SCHEMA,
        variables: {
          stationID: stationid, 
          stationLang: stationlang
        }
      })
    })
  }

  return ({
    handleStationQuery,
  })
}

export default useQueryStation