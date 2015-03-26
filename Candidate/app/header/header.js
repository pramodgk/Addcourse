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
    .module('header', [
      'ui.router'
    ]);

  angular
    .module('header')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('/header', {
        url: '/header',
        templateUrl: 'header/header.tpl.html'
      });
  }

})();
