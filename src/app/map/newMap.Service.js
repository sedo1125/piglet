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
      var queryResults = _results.data.results;
      return queryResults[0].geometry.location
    }

    function newMapFail() {
      $log.info('Error in geocode');
    }
  }

})();
