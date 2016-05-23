(function() {
  'use strict'

  angular
    .module('pigletJs')
    .factory('MapService', MapService);

  function MapService($http, $log) {
    return {
      getMap: getMap
    };

    function getMap() {
      return $http.get('/app/map/map.json')
        .then(getMapCompleted)
        .catch(getMapFailed);

      function getMapCompleted(response) {
        return response.data;
      }

      function getMapFailed() {
        $log.info('Failed to get map coordinates');
      }
    }

  }
})();
