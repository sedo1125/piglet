(function(){
'use strict';

  angular
    .module('pigletJs')
    .controller('WeatherController', WeatherController);

    function WeatherController ($scope, weatherService) {
      var vm = this;
      vm.weather = weatherService.getWeather();
    }
})();
