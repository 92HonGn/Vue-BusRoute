const getEstimateTimeStatus = (estimateTimeData) => {
  if(!estimateTimeData) {
    return ''
  } else {
    if (estimateTimeData.etas.length === 0) {
      return estimateTimeData.comeTime;
    } else if (estimateTimeData.etas.length !== 0) {
      if (estimateTimeData.etas.eta < 3) {
        return "進站中";
      } else if (estimateTimeData.etas.eta >= 3 && estimateTimeData.etas.eta <= 5) {
        return "即將到站";
      } else if (estimateTimeData.etas.eta > 5) {
        return `${estimateTimeData.etas.eta}`;
      } else {
        console.log(`約 ${estimateTimeData.comeTime}`);
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