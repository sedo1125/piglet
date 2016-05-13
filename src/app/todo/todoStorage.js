/* jshint undef: true, unused: true */
/*global angular */
(function () {
	'use strict';

	angular.module('pigletJs')

	/**
	 * Services that persists and retrieves TODOs from localStorage
	*/
	.factory('todoStorage', todoStorage);

	function todoStorage () {
		var STORAGE_ID = 'todos-angularjs-perf';

		return {
			get: function () {
				return angular.fromJson(localStorage.getItem(STORAGE_ID) || '[]');
			},

			put: function (todos) {
				localStorage.setItem(STORAGE_ID, angular.toJson(todos));
			}
		};
	}
})();
