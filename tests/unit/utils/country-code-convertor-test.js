import {getCountryCode, getCountryName} from 'kci/utils/country-code-convertor';
import { module, test } from 'qunit';

module('Unit | Utility | country code convertor');

test('Can find country code from name', function(assert) {
  let result = getCountryCode('Canada');
  assert.equal(result, 'CA', 'Country code found correctly');
});

test('Can find country name from code', function(assert) {
  let result = getCountryName('CA');
  assert.equal(result, 'Canada', 'Country name found correctly');
});
