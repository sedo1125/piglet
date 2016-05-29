(function() {
  'use strict'

  angular
    .module('pigletJs')
    .controller('FactsController', FactsController);

  function FactsController($log, $timeout, FactsService) {
    var vm = this;

    activate();

    function activate() {
      return getFacts()
      .then(function() {
        $log.log("Got facts")
      });
    }

    function getFacts() {
      return FactsService.getFacts()
      .then(function(data) {
        vm.i = Math.floor((Math.random()*(16-1))+1)
        vm.holder = data;
        vm.fact = vm.holder.data[0][vm.i];
      });
    }
  }
})();
