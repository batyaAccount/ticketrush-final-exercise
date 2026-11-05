const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('members receive a ticket discount but still pay the service fee', function () { assertEq(calcTotal(2, true), 584); });
test('members receive only the larger discount when also students', function () { assertEq(calcTotal(2, true, true), 584); });
test('members may buy up to 6 tickets', function () { assertEq(maxTickets(true), 6); });
test('invalid quantities return null', function () {
  assertEq(calcTotal(0), null);
  assertEq(calcTotal(9), null);
  assertEq(calcTotal(7, true), null);
});
test('member and regular quantity limits are inclusive', function () {
  assertEq(calcTotal(6, true), 1752);
  assertEq(calcTotal(8), 2896);
});
