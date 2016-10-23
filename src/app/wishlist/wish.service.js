(function() {
  'use strict'

  angular
    .module('pigletJs')
    .factory('WishService', WishService);

  function WishService($http, $log) {
    var vm = this;

    return {
      getWish: getWish
    };

    function getWish() {
      return $http.get('https://api.mlab.com/api/1/databases/piglet/collections/Wishes?&apiKey=rMvbsiIlVCNp-YtU3RM-px2Wg1w_WpEq')
        .then(getWishCompleted)
        .catch(getWishFailed);

      function getWishCompleted(response) {
        vm.list = [];
        for (vm.i = 0; vm.i < response.data.length; vm.i ++) {
            vm.m = response.data[vm.i]["wish"];
            vm.oid = response.data[vm.i]["_id"]["$oid"];
            vm.list.push({"item": vm.m, "oid": vm.oid});
        }
        return {list: vm.list};
      }

      function getWishFailed() {
        $log.info('Failed to get wishes');
      }
    }

  }
})();
