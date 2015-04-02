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
    .module('admin', [
      'ui.router'
    ]);
  
angular
    .module('admin')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('Course.admin', {
        url: '/admin',
        views: {
          '@': {
            url: '/admin',
            templateUrl: 'admin/admin.tpl.html'
          }
        }
      })
      .state('Course.SuccessPage',{
        url:"/SuccessPage",
        views:{
          '@':{

        templateUrl:"Create/Create.tpl.html"
      }
    }
      })
       .state('Course.WelcomePage',{
        url:"/WelcomePage",
        views:{
          '@':{

        templateUrl:"Create/Welcome.tpl.html"
      }
    }
      })
  }
})();
