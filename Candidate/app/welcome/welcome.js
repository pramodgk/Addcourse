(function () {
  'use strict';

  /* @ngdoc object
   * @name home
   * @requires $stateProvider
   *
   * @description
   *
   */
   angular
    .module('welcome', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('FMS.welcome', {
      url: '/welcome',
      views: {
        '@': {
          templateUrl: 'welcome/welcome.tpl.html'
        }
      }
    });
  }
})();