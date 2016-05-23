(function() {
  'use strict';

  angular
    .module('pigletJs')
    .directive('acmeMalarkey', acmeMalarkey);

  /** @ngInject */
  function acmeMalarkey(malarkey) {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var watcher;
      var typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });

      el.addClass('acme-malarkey');

      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause().delete();
      });

      watcher = scope.$watch('vm.contributors', function() {
        angular.forEach(vm.contributors, function(contributor) {
          typist.type(contributor).pause().delete();
        });
      });

      scope.$on('$destroy', function () {
        watcher();
      });
    }

    /** @ngInject */
    function MalarkeyController($log, githubContributor) {
      var vm = this;

      vm.contributors = [];

      activate();

      function activate() {
        return getContributors().then(function() {
          $log.info('Piglet Names Loaded');
        });
      }

      function getContributors() {
        return githubContributor.getContributors(5).then(function() {
//          vm.contributors = ['piglet', 'heocon', 'ngugget', 'mama', 'em be', 'ani', 'mas', 'panda', 'pigle', 'ms p'];
          vm.contributors = ['piglet', 'heocon', 'ngugget', 'pink' , 'ani'];

          return vm.contributors;
        });
      }
    }

  }

})();
