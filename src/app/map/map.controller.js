(function() {
  'use strict';

  angular
  .module('pigletJs')
  .controller('MapController', MapController);

function MapController ($scope, $log, MapService) {
  var vm = this
  vm.gr = {
      lat: 42.96,
      lng: -85.6,
      zoom: 6
  };
  vm.markers = {};

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
        return vm.markers;
      })
  }
}
})();
