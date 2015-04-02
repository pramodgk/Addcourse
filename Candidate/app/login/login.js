(function () {
  'use strict';

  /* @ngdoc object
   * @name login
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('login', [
      'ui.router'
    ])
    .config(config)
    .controller('loginCtrl', ['$scope','$location','$rootScope', function ($scope, $location, $rootScope) {
      $rootScope.login=[{'fname':'Pramod','lname':'Kshathri','uname' : 'test','pass' : 'test'}];

      console.log($rootScope.login);
      $rootScope.uname=$scope.uname;
      console.log($scope.uname);
      $scope.validate = function () {
        /*alert('validate');*/
        for(var i=0;i<$rootScope.login.length;i++){
        if ($scope.uname === $rootScope.login[i].uname && $scope.pass === $rootScope.login[i].pass) {
          $rootScope.login1 = true;
           console.log($scope.uname);
           console.log($rootScope.login[i].fname);
            $rootScope.uname=$rootScope.login[i].fname;
          /*alert('success');
          console.log($location);*/
          $location.path('/Course/welcome');
        }
      }
      };
      $scope.logout = function () {
        $scope.login=false;
        $location.path('/');
        location.reload();
      };
    }]);
  function config($urlRouterProvider,$stateProvider) {
    $urlRouterProvider.otherwise('/Course/login');
    /*console.log($stateProvider);*/
    $stateProvider
    .state('Course.login', {
      url: '/login',
      views: {
        '@': {
          templateUrl: 'login/login.tpl.html',
          controller: 'loginCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('Course.login.register',{
      url:'/register',
      templateUrl:'register/register.tpl.html',
      controller:'registerCtrl',
      controllerAs:'vm'
    })
    .state('Course.success', {
      url: '/welcome',
      views: {
        '@': {
          templateUrl: 'welcome/welcome.tpl.html',
          controller: 'loginCtrl'
        }
      }
    });
  }

})();
