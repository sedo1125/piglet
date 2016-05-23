(function() {
  'use strict';

  angular
    .module('pigletJs')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/navbar/navbar.html'
    };

    return directive;
  }

})();
