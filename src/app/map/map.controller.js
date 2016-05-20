(function() {
  'use strict';

  angular
  .module('pigletJs')
  .controller('MapController', MapController);

function MapController ($scope) {
  var vm = this;

  angular.extend($scope, {
              gr: {
                  lat: 42.96,
                  lng: -85.6,
                  zoom: 6
              },
              markers: {}
          });

          vm.addMarkers = function() {
              angular.extend($scope, {
                  markers: {
                      m1: {
                          lat: 42.96,
                          lng: -85.6,
                          draggable: true
                      },
                      m2: {
                          lat: 42.28,
                          lng: -83.74,
                          focus: true,
                          draggable: true
                      }
                  }
              });
          };

          vm.removeMarkers = function() {
              vm.markers = {};
          }

          vm.addMarkers();
        }
})();
