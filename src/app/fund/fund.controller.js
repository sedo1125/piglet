(function() {
  'use strict';

  angular
  .module('pigletJs')
  .controller('FundController', FundController);

function FundController (moment, $http, $log) {

  var vm = this;
  vm.moneys = 100.25;

  vm.startdate =  moment([2016, 4, 1]);
  vm.enddate = new moment();

  vm.calc = function(start, end) {
    return (end.diff(start, 'seconds') * 0.0000385 * 2
    - 47 //pink nike shoes
    - 92 //banna republic dresses
    - 100 //earrings
    - 100 // chair
    - 80 //tan low boots
    - 220 //flight to orlando
    - vm.total
    )
  }

  activate();

  function activate() {
    return getMoneys().then(function(){
      $log.info('Got moneys');
    });
  }
  function getMoneys() {
    return $http.get('https://api.mlab.com/api/1/databases/piglet/collections/Gifts?&apiKey=rMvbsiIlVCNp-YtU3RM-px2Wg1w_WpEq')
      .then(function(response){
        vm.list = [];
        vm.total = 0;
        for (vm.i = 0; vm.i < response.data.length; vm.i ++) {
            vm.n = response.data[vm.i]["cost"];
            vm.total = vm.total + vm.n
        }
        $log.log(vm.total);
        return;
      })
  }

  vm.animateElementInLeft = function($el) {
  $el.removeClass('hiddens');
  $el.addClass('animated bounceInLeft'); // this example leverages animate.css classes
  };

  vm.animateElementOutLeft = function($el) {
    $el.addClass('hiddens');
    $el.removeClass('animated bounceInLeft'); // this example leverages animate.css classes
  };

  vm.animateElementInRight = function($el) {
  $el.removeClass('hiddens');
  $el.addClass('animated bounceInRight'); // this example leverages animate.css classes
  };

  vm.animateElementOutRight = function($el) {
    $el.addClass('hiddens');
    $el.removeClass('animated bounceInRight'); // this example leverages animate.css classes
  };

}
})();
