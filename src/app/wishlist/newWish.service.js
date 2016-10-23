(function() {
  'use strict'

  angular
    .module('pigletJs')
    .factory('newWishService', newWishService);

  function newWishService($http, $log) {
    return {
      newWish: newWish
    }

    function newWish(strWish) {
      var holder =
      {
        "wish": strWish,
        "bought": 0
      }
      var jsonstr = angular.toJson(holder);
      return $http.post('https://api.mlab.com/api/1/databases/piglet/collections/Wishes?apiKey=rMvbsiIlVCNp-YtU3RM-px2Wg1w_WpEq', jsonstr)
    }

    function newWishFail() {
      $log.info('Error in geocode');
    }

    function newWishPosted() {
      $log.info('New map data saved')
    }

    function newWishNotPosted() {
      $log.info('New map data not saved')
    }
  }
})();
