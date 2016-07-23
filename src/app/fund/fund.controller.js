(function() {
  'use strict';

  angular
  .module('pigletJs')
  .controller('FundController', FundController);

function FundController (moment) {

  var vm = this;
  vm.moneys = 100.25;

  vm.startdate =  moment([2016, 4, 1]);
  vm.enddate = new moment();

  vm.calc = function(start, end) {
    return (end.diff(start, 'seconds') * 0.0000385 * 2
    - 47 //pink nike shoes
    - 92 //banna republic dresses
    - 100 //earrings
    )
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
