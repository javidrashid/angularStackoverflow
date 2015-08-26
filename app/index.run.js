(function() {
  'use strict';

  angular
    .module('improvedAngularStackoveflow')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
