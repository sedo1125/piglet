(function() {
  'use strict';

  angular
  .module('pigletJs')
  .controller('WishlistController', WishlistController);

function WishlistController ($scope, $log, $timeout, WishService, newWishService, deleteMapService) {
  var vm = this

  vm.newWish = newWish;
  vm.removeMap = removeMap;
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
    // if (vm.strPlace = "City, State") {
    //   alert("Enter a valid city")
    //   return
    // }
    return newWishService.newWish(vm.strWish)
      .then(function(){
        $timeout(function () {
            vm.strWish = "";
            activate();
        }, 20);
      })
  }


  function removeMap(index) {
    var delPlace = vm.list[index]["oid"];
    return deleteMapService.deleteMap(delPlace)
      .then(function() {
        $timeout(function () {
            activate();
        }, 20);
      })
  }
}
})();
