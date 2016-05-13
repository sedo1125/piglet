(function() {
  'use strict';

  angular
    .module('pigletJs')
    .factory('weatherService', weatherService);

  function weatherService($http) {
        return {
          getWeather: function() {
            var weather = { temp: {}, clouds: null };
            $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=GrandRapids,at&units=imperial&callback=JSON_CALLBACK&APPID=d4e3500d9d96d1f177bd0ef4ad41faab').success(function(data) {
                if (data) {
                    if (data.main) {
                        weather.temp.current = data.main.temp;
                        weather.temp.min = data.main.temp_min;
                        weather.temp.max = data.main.temp_max;
                    }
                    weather.clouds =  "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                    weather.img = "assets/images/" + data.weather[0].icon + ".png";
                    weather.bg = "assets/images/bg/" + data.weather[0].icon + ".png";
                }
            });

            return weather;
          }
        };
      }
})();
