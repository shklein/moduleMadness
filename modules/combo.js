var randomNumber = require('./random');
var formatNumber = require('./usd');

var total = function () {
  return formatNumber(randomNumber(100, 1000000));

}

var acctBalance = function () {
  return "Account balance:\n";
}

module.exports.money = total;
module.exports.balance = acctBalance;
