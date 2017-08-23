'use strict';

define('kci/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('pods/dashboard/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/dashboard/controller.js should pass ESLint\n\n45:3 - Parsing error: Unexpected character \'@\' (null)');
  });

  QUnit.test('pods/dashboard/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/dashboard/route.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('utils/country-code-convertor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/country-code-convertor.js should pass ESLint\n\n');
  });

  QUnit.test('utils/random-in-range.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/random-in-range.js should pass ESLint\n\n');
  });
});
define('kci/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('kci/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'kci/tests/helpers/start-app', 'kci/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _kciTestsHelpersStartApp, _kciTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _kciTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _kciTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('kci/tests/helpers/resolver', ['exports', 'kci/resolver', 'kci/config/environment'], function (exports, _kciResolver, _kciConfigEnvironment) {

  var resolver = _kciResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _kciConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _kciConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('kci/tests/helpers/start-app', ['exports', 'ember', 'kci/app', 'kci/config/environment'], function (exports, _ember, _kciApp, _kciConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _kciConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _kciApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('kci/tests/test-helper', ['exports', 'kci/tests/helpers/resolver', 'ember-qunit'], function (exports, _kciTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_kciTestsHelpersResolver['default']);
});
define('kci/tests/tests.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/dashboard/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/dashboard/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/country-code-convertor-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/country-code-convertor-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/random-in-range-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/random-in-range-test.js should pass ESLint\n\n');
  });
});
define('kci/tests/unit/pods/dashboard/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:dashboard', 'Unit | Route | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kci/tests/unit/utils/country-code-convertor-test', ['exports', 'kci/utils/country-code-convertor', 'qunit'], function (exports, _kciUtilsCountryCodeConvertor, _qunit) {

  (0, _qunit.module)('Unit | Utility | country code convertor');

  (0, _qunit.test)('Can find country code from name', function (assert) {
    var result = (0, _kciUtilsCountryCodeConvertor.getCountryCode)('Canada');
    assert.equal(result, 'CA', 'Country code found correctly');
  });

  (0, _qunit.test)('Can find country name from code', function (assert) {
    var result = (0, _kciUtilsCountryCodeConvertor.getCountryName)('CA');
    assert.equal(result, 'Canada', 'Country name found correctly');
  });
});
define('kci/tests/unit/utils/random-in-range-test', ['exports', 'kci/utils/random-in-range', 'qunit'], function (exports, _kciUtilsRandomInRange, _qunit) {

  (0, _qunit.module)('Unit | Utility | random in range');

  (0, _qunit.test)('Number is within range', function (assert) {
    var result = (0, _kciUtilsRandomInRange['default'])(-10, 10, 3);
    assert.ok(result > -10 && result < 10, 'Number generated is within specified range');
  });
});
require('kci/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
