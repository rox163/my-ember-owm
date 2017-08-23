import randomInRange from 'kci/utils/random-in-range';
import { module, test } from 'qunit';

module('Unit | Utility | random in range');

test('Number is within range', function(assert) {
  let result = randomInRange(-10, 10, 3);
  assert.ok(result > -10 && result < 10, 'Number generated is within specified range');
});
