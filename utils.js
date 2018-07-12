'use strict';
const sigFigs = 18;

function whole(total) {
  if (total === "0") return total;
  return Number(total.substring(0, total.length - sigFigs).replace(/^0+/, '') || "0");
}

function votePower(balance) {
  var wholeTotal = whole(balance);
  if (wholeTotal == 0) {
    return 10;
  } else if (wholeTotal <= 10) {
    return 11 * wholeTotal;
  } else if (wholeTotal <= 100) {
    return 100 + (3 * wholeTotal);
  } else {
    return 500;
  }

}
module.exports = {
  votePower
}