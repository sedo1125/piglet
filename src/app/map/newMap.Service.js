(function() {
  'use strict'

  angular
    .module('pigletJs')
    .factory('newMapService', newMapService);

  function newMapService($http, $log) {
    return {
      newMap: newMap
    }

    function newMap(strPlace) {
      return $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' +
                strPlace + '&key=AIzaSyDD1D12EKCRsm3B_2xb_Bo8r997vxyW_mU')
        .then(newMapSuccess)
        .catch(newMapFail);
    }

    function newMapSuccess(_results) {
      var address = _results.data.results[0].formatted_address;
      var data = _results.data.results[0].geometry.location;
      var holder =
      {
          "test" : {
          "lat": data["lat"],
          "lng": data["lng"],
          "focus": true,
          "draggable": true,
          "icon": {
              "iconUrl": "assets/images/marker.png",
              "iconAnchor": [
                  54,
                  94
              ],
              "popupAnchor": [
                  -3,
                  -76
              ]
            }
          }
      }
      var jsonstr = angular.toJson(holder);
      var new_jsonstr = jsonstr.replace("test", address);
      var new_holder = angular.fromJson(new_jsonstr);
      $http.post('https://api.mlab.com/api/1/databases/piglet/collections/Places?apiKey=rMvbsiIlVCNp-YtU3RM-px2Wg1w_WpEq', new_holder)
          .success(function () {
          })
          .error(function () {
          });
    }

    function newMapFail() {
      $log.info('Error in geocode');
    }
  }

})();
