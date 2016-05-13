/* jshint undef: true, unused: true */
/*global angular */
(function () {
	'use strict';

	angular.module('pigletJs')

	/**
	 * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true
	 */
	.directive('todoFocus', todoFocus);

	function todoFocus ($timeout) {
		return function (scope, elem, attrs) {
			scope.$watch(attrs.todoFocus, function (newVal) {
				if (newVal) {
					$timeout(function () {
						elem[0].focus();
					}, 0, false);
				}
			});
		};
	}
})();
