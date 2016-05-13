(function() {
  'use strict';

  angular
    .module('pigletJs')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views : {
          '': {
              templateUrl: 'app/main/main.html',
              controller: 'MainController',
              controllerAs: 'main'
          },
          'landing@home': {
            templateUrl: 'app/landing/landing.html'
          },
          'weather@home': {
            templateUrl: 'app/weather/weather.html',
            controller: 'WeatherController',
            controllerAs: 'vm'
          },
          'fund@home': {
            templateUrl: 'app/fund/fund.html',
            controller: 'FundController',
            controllerAs: 'vm'
          }
        }
      })
      .state('todo', {
        url: '/todo',
        templateUrl: 'app/todo/todo.html',
        controller: 'TodoController',
        controllerAs: 'TC'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
