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
      return $http.get('https://api.mlab.com/api/1/databases/piglet/collections/Places?&apiKey=rMvbsiIlVCNp-YtU3RM-px2Wg1w_WpEq')
        .then(getMapCompleted)
        .catch(getMapFailed);

      function getMapCompleted(response) {
        vm.locations = [];
        vm.list = [];
        for (vm.i = 0; vm.i < response.data.length; vm.i ++) {
            vm.m = Object.keys(response.data[vm.i])[1];
            vm.oid = response.data[vm.i]["_id"]["$oid"];
            vm.list.push({"location": vm.m, "oid": vm.oid});
            vm.locations[vm.i] = response.data[vm.i][vm.m];
        }
        return {locations: vm.locations, list: vm.list};
      }

      function getMapFailed() {
        $log.info('Failed to get map coordinates');
      }
    }

  }
})();
