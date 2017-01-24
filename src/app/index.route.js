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
              templateUrl: 'app/main/main.html'
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
          },
          'map@home': {
            templateUrl: 'app/map/map.html',
            controller: 'MapController',
            controllerAs: 'vm'
          },
          'facts@home': {
            templateUrl: 'app/facts/facts.html',
            controller: 'FactsController',
            controllerAs: 'vm'
          },
          'wishlist@home': {
            templateUrl: 'app/wishlist/wishlist.html',
            controller: 'WishlistController',
            controllerAs: 'vm'
          },
          'footer@home': {
            templateUrl: 'app/footer/footer.html'
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
