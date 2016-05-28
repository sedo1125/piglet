(function() {
  'use strict'

  angular
    .module('pigletJs')
    .factory('deleteMapService', deleteMapService)

  function deleteMapService($http, $log) {
    return {
      deleteMap: deleteMap
    }

    function deleteMap(delPlace) {
      return $http.delete('https://api.mlab.com/api/1/databases/piglet/collections/Places/' + delPlace + '?apiKey=rMvbsiIlVCNp-YtU3RM-px2Wg1w_WpEq')
      .then(delMapSuccess)
      .catch(delMapFail);
    }

    function delMapSuccess() {
      $log.log("Location removed")
    }

    function delMapFail() {
      $log.log("location failed to remove")
    }
  }
})();
