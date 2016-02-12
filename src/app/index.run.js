(function() {
  'use strict';

  angular
    .module('angularUiRouter')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
