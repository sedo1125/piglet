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
      return $http.jsonp('http://api.openweathermap.org/data/2.5/forecast?id=4994358&appid=d4e3500d9d96d1f177bd0ef4ad41faab')
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
