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
    .module('testmodule', [
      'ui.router'
    ]);

  angular
    .module('testmodule')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('testFolder', {
        url: '/testFolder',
        templateUrl: 'TestFolder/testfolder.tpl.html'
      });
     /* .state('/quick',{
        url:'/quick',
        templateUrl:'dashboard/dashboard.tpl.html'
      });*/
  }

})();
