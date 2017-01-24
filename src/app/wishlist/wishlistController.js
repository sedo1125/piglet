(function() {
  'use strict';

  angular
  .module('pigletJs')
  .controller('WishlistController', WishlistController);

function WishlistController ($scope, $log, $timeout, WishService, newWishService, deleteWishService) {
  var vm = this

  vm.newWish = newWish;
  vm.removeWish = removeWish;
  activate();

  function activate() {
    return getWish().then(function(){
      $log.info('Got wishes');
    });
  }

  function getWish() {
    return WishService.getWish()
      .then(function(data){
        vm.list = data.list;
        $log.log(vm.list);
        return;
      })
  }

  function newWish() {
    return newWishService.newWish(vm.strWish)
      .then(function(){
        $timeout(function () {
            vm.strWish = "";
            activate();
        }, 20);
      })
  }


  function removeWish(index) {
    var delWish = vm.list[index]["oid"];
    var wish = vm.list[index]["item"];
        $log.log(wish)
    return deleteWishService.deleteWish(delWish, wish)
      .then(function() {
        $timeout(function () {
            activate();
        }, 20);
      })
  }
}
})();
