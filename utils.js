'use strict';
const sigFigsETH = 18;

function whole(total, decimals) {
  if (total === "0") return total;
  decimals = decimals || sigFigsETH;
  return Number(total.substring(0, total.length - decimals).replace(/^0+/, '') || "0");
}

function votePower(balance, decimals) {
  var wholeTotal = whole(balance, decimals);
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
