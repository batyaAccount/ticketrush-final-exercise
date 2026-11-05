const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('members receive a ticket discount but still pay the service fee', function () { assertEq(calcTotal(2, true), 584); });
test('members may buy up to 4 tickets', function () { assertEq(maxTickets(true), 4); });
test('invalid quantities return null', function () {
  assertEq(calcTotal(0), null);
  assertEq(calcTotal(9), null);
  assertEq(calcTotal(5, true), null);
});
