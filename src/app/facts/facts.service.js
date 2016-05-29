(function() {
  'use strict'

  angular
    .module('pigletJs')
    .factory('FactsService', FactsService)

  function FactsService($http, $log) {
    var vm = this;
    return {
      getFacts: getFacts
    }

    function getFacts() {
      return $http.get('https://api.mlab.com/api/1/databases/piglet/collections/Facts?&apiKey=rMvbsiIlVCNp-YtU3RM-px2Wg1w_WpEq')
        .then(FactsCompleted)
        .catch(FactsFailed)
      function FactsCompleted(response) {
        vm.fact = response;
        return vm.fact
      }

      function FactsFailed() {
        $log.info('Failed to get facts')
      }
    }


  }
})();
