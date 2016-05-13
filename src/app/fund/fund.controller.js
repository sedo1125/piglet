(function() {
  'use strict';

  angular
  .module('pigletJs')
  .controller('FundController', FundController);

function FundController () {

  var vm = this;

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
