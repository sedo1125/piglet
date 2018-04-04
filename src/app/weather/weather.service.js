(function() {
  'use strict';

  angular
    .module('pigletJs')
    .factory('weatherService', weatherService);

  function weatherService($http, $log) {
    var service = {
      getWeather: getWeather
    };

    return service;

    function getWeather () {
      return $http.jsonp('http://api.openweathermap.org/data/2.5/weather?id=4994358&units=imperial&callback=JSON_CALLBACK&APPID=d4e3500d9d96d1f177bd0ef4ad41faab')
        .then(getWeatherComplete)
        .catch(getWeatherFailed);

      function getWeatherComplete(response) {
        return response.data;
      }

      function getWeatherFailed() {
        $log.info('Failed to get weather');
      }

    }
  }
})();
