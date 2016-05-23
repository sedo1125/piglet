(function(){
'use strict';

  angular
    .module('pigletJs')
    .controller('WeatherController', WeatherController);

    function WeatherController (weatherService, $log) {
      var vm = this;
      vm.weather = { temp: {}, clouds: null };

      activate ();

      function activate () {
        return getWeather().then(function() {
          $log.info('Got weather data');
        });
      }

      function getWeather() {
        return weatherService.getWeather()
          .then(function(data) {
              vm.weather.temp.current = data.main.temp
              vm.weather.clouds =  "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
              vm.weather.img = "assets/images/" + data.weather[0].icon + ".png";
              vm.weather.bg = "assets/images/bg/" + data.weather[0].icon + ".png";
            return vm.weather;
          });
      }
      //vm.weather = weatherService.getWeather();

    }
})();
