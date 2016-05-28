(function() {
  'use strict';

  angular
  .module('pigletJs')
  .controller('MapController', MapController);

function MapController ($scope, $log, $timeout, MapService, newMapService, deleteMapService) {
  var vm = this
  vm.gr = {
      lat: 42.96,
      lng: -85.6,
      zoom: 5
  };
  vm.markers = [];
  vm.newMap = newMap;
  vm.removeMap = removeMap;
  activate();

  function activate() {
    return getMap().then(function(){
      $log.info('Got places');
    });
  }

  function getMap() {
    return MapService.getMap()
      .then(function(data){
        vm.markers = data.locations;
        vm.list = data.list;
        return;
      })
  }

  function newMap() {
    // if (vm.strPlace = "City, State") {
    //   alert("Enter a valid city")
    //   return
    // }
    return newMapService.newMap(vm.strPlace)
      .then(function(){
        $timeout(function () {
            vm.strPlace = "";
            activate();
        }, 100);
      })
  }


  function removeMap(index) {
    var delPlace = vm.list[index]["oid"];
    return deleteMapService.deleteMap(delPlace)
      .then(function() {
        $timeout(function () {
            activate();
        }, 100);
      })
  }
}
})();
