
function Babysitter() {

  function start(startTime, departureTime, bedtime) {
    const payFromStartToBed = payoutFromStartToBed(bedtime, startTime),
      payFromBedToMidnight = payoutFromBedToMidnight(departureTime, bedtime),
      payFromMidnightToDeparture = payoutFromMidnightToDeparture(departureTime);

    const totalPayout = payFromStartToBed + payFromBedToMidnight + payFromMidnightToDeparture;

    return totalPayout;
  }
  return {
    start
  };
}

function payoutFromMidnightToDeparture(departureTime) {
  let payout = 0;

  if (departureTime >= 1 && departureTime <= 4) {
    payout = Math.abs(departureTime) * 16;
  }
  return payout;
}

function payoutFromStartToBed(bedtime, startTime) {
  return Math.abs(bedtime - startTime) * 12;
}

function payoutFromBedToMidnight(departureTime, bedtime) {
  let payout = 0;

  if (departureTime >= 1 && departureTime <= 4 ) {
    payout = Math.abs(bedtime - 12) * 8;
    return payout;
  }
  return payout;
}

export default Babysitter;