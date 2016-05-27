(function() {
  'use strict';

  angular
  .module('pigletJs')
  .controller('MapController', MapController);

function MapController ($scope, $log, $http, MapService, newMapService) {
  var vm = this
  vm.gr = {
      lat: 42.96,
      lng: -85.6,
      zoom: 6
  };
  vm.markers = [];
  vm.newMap = newMap;
  vm.strPlace = "Santa Fe"
  activate();

  function activate() {
    return getMap().then(function(){
      $log.info('Got places');
    });
  }

  function getMap() {
    return MapService.getMap()
      .then(function(data){
        vm.markers = data;
        $log.info(vm.markers);
        return vm.markers;
      })
  }

  function newMap() {
    return newMapService.newMap(vm.strPlace)
      .then(function(data){
        vm.coordinates = data;
        $http.post('https://api.mlab.com/api/1/databases/piglet/collections/Places?apiKey=rMvbsiIlVCNp-YtU3RM-px2Wg1w_WpEq', data)
            .success(function () {
                getMap();
            })
            .error(function () {
            });
      })
  }
}
})();
