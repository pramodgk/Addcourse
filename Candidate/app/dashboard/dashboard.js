(function() {
    'use strict';

    /* @ngdoc object
     * @name home
     * @requires $stateProvider
     *
     * @description
     *
     */
   angular
    .module('dashboard', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('Course.dashboard', {
        url: '/dashboard',
        views: {
          '@': {
            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.tpl.html'
          }
        }
      });
  }
})();
