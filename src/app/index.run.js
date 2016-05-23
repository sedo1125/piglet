(function() {
  'use strict';

  angular
    .module('pigletJs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('Piglet loaded');
  }

})();
