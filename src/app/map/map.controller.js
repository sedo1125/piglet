(function() {
  'use strict';

  angular
  .module('pigletJs')
  .controller('MapController', MapController);

function MapController ($scope) {
  var vm = this;

  vm.gr = {
      lat: 42.96,
      lng: -85.6,
      zoom: 6
  };

  vm.markers = {};

  vm.addMarkers = function() {
          vm.markers = {
              m1: {
                  lat: 42.96,
                  lng: -85.6,
                  draggable: true,
                  icon: {
                    iconUrl: 'assets/images/marker.png',
                    iconAnchor:   [54, 94], // point of the icon which will correspond to marker's location
                    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
                  }
              },
              m2: {
                  lat: 42.28,
                  lng: -83.74,
                  focus: true,
                  draggable: true,
                  icon: {
                    iconUrl: 'assets/images/marker.png',
                    iconAnchor:   [54, 94], // point of the icon which will correspond to marker's location
                    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
                  }
              }
          }
      };

  vm.removeMarkers = function() {
      vm.markers = {};
  };

  vm.addMarkers();
}
})();
