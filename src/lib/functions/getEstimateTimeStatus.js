export const getEtaFromEtas = (etas=[{ eta: 0, }]) => {
  const numEtas = etas.map(e => e.eta)
  return Math.min(...numEtas)
}

const getEstimateTimeStatus = (estimateTimeData) => {
  if(!estimateTimeData) {
    return ''
  } else {
    if (estimateTimeData.etas.length === 0) {
      return estimateTimeData.comeTime;
    } else if (estimateTimeData.etas.length !== 0) {
      const etaMin = getEtaFromEtas(estimateTimeData.etas)
      if (etaMin < 3) {
        return "進站中";
      } else if (etaMin >= 3 && etaMin <= 5) {
        return "即將到站";
      } else {
        return etaMin;
      }
    } else if (estimateTimeData.isOperationDay === false) {
      return "今日未營運";
    } else if (estimateTimeData.isSuspended === true) {
      return "末班駛離";
    } else if (estimateTimeData.isConstruction === true || estimateTimeData.isEvent === true) {
      return "改道...";
    } else {
      console.log("路線狀態");
    }
  }
}

export default getEstimateTimeStatus