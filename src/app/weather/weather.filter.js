(function(){
  'use strict'

  angular
  .module('pigletJs')
  .filter('temp', temp);


  function temp ($filter) {
    return function(input, precision) {
        if (!precision) {
            precision = 0;
        }
        var numberFilter = $filter('number');
        return numberFilter(input, precision) + '\u00B0F';
    };
  }
})();
