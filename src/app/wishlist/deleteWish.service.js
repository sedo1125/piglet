(function() {
  'use strict'

  angular
    .module('pigletJs')
    .factory('deleteWishService', deleteWishService)

  function deleteWishService($http, $log) {
    return {
      deleteWish: deleteWish
    }

    function deleteWish(delWish, wish) {
      return $http.put('https://api.mlab.com/api/1/databases/piglet/collections/Wishes/' + delWish + '?apiKey=rMvbsiIlVCNp-YtU3RM-px2Wg1w_WpEq', {"wish": wish, "bought": true})
      .then(delMapSuccess)
      .catch(delMapFail);
    }

    function delMapSuccess() {
      $log.log("Wish bought")
    }

    function delMapFail() {
      $log.log("Wish failed to be bought")
    }
  }
})();
