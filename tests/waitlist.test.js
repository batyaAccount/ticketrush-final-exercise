const { joinWaitlist } = require('../js/waitlist');

test('trims and lowercases email addresses', function () {
  assertEq(JSON.stringify(joinWaitlist([], '  Dana@Mail.COM ')), JSON.stringify(['dana@mail.com']));
});

test('does not add duplicate addresses', function () {
  assertEq(JSON.stringify(joinWaitlist(['a@b.co'], 'A@B.CO')), JSON.stringify(['a@b.co']));
});

test('ignores invalid email addresses', function () {
  assertEq(JSON.stringify(joinWaitlist(['a@b.co'], 'abc')), JSON.stringify(['a@b.co']));
  assertEq(JSON.stringify(joinWaitlist([], 'abc@def')), JSON.stringify([]));
  assertEq(JSON.stringify(joinWaitlist([], 'abc.def@ghi')), JSON.stringify([]));
});

test('returns a new array without mutating its input', function () {
  const original = ['x@y.co'];
  const updated = joinWaitlist(original, 'z@y.co');
  assertEq(original.length, 1);
  assertEq(updated.length, 2);
  assertEq(updated === original, false);
});
