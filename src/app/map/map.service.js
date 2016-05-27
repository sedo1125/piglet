(function() {
  'use strict'

  angular
    .module('pigletJs')
    .factory('MapService', MapService);

  function MapService($http, $log) {
    var vm = this;

    return {
      getMap: getMap
    };

    function getMap() {
      return $http.get('https://api.mlab.com/api/1/databases/piglet/collections/Places?f={%22_id%22:%200}&apiKey=rMvbsiIlVCNp-YtU3RM-px2Wg1w_WpEq')
      //return $http.get('app/map/map.json')
        .then(getMapCompleted)
        .catch(getMapFailed);

      function getMapCompleted(response) {
        vm.locations = [];
        for (vm.i = 0; vm.i < response.data.length; vm.i ++) {
            vm.m = "m" + (vm.i + 1)
            vm.locations[vm.i] = response.data[vm.i][vm.m];
        }
        return vm.locations;
      //  return vm.locations;
      }

      function getMapFailed() {
        $log.info('Failed to get map coordinates');
      }
    }

  }
})();
