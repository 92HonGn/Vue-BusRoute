export const getEtaFromEtas = ( etas=[{ eta: 0, }] ) => {

  const numEtas = etas.map(e => e.eta)

  return Math.min(...numEtas)
  
}

const getEstimateStatus = ( estimateStatusData ) => {

  if(!estimateStatusData) {

    return ''

  } else {

    if (estimateStatusData.etas.length === 0) {

      return estimateStatusData.comeTime;

    } else if (estimateStatusData.etas.length !== 0) {

      const etaMin = getEtaFromEtas(estimateStatusData.etas)

      if (etaMin < 3) {

        return "進站中";

      } else if (etaMin >= 3 && etaMin <= 5) {

        return "即將到站";

      } else {

        return `${etaMin} 分`;
        
      }

    } else if (estimateStatusData.isOperationDay === false) {

      return "今日未營運";

    } else if (estimateStatusData.isSuspended === true) {

      return "末班駛離";

    } else if (estimateStatusData.isConstruction === true || estimateStatusData.isEvent === true) {

      return "改道...";

    } else {

      console.log("路線狀態");

    }

  }

}

export default getEstimateStatus