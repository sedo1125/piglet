(function() {
  'use strict'

  angular
    .module('pigletJs')
    .factory('newWishService', newWishService);

  function newWishService($http) {
    return {
      newWish: newWish
    }

    function newWish(strWish) {
      var holder =
      {
        "wish": strWish,
        "bought": false
      }
      var jsonstr = angular.toJson(holder);
      return $http.post('https://api.mlab.com/api/1/databases/piglet/collections/Wishes?apiKey=rMvbsiIlVCNp-YtU3RM-px2Wg1w_WpEq', jsonstr)
    }

  }
})();
