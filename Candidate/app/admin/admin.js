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
    ])
     .controller('adminCtrl', function($scope,$location, $rootScope){
     $scope.chk=function()
     {
       $scope.uname=$scope.txt1;
       $scope.pwd=$scope.txt2;
       if($scope.uname=="pramod" && $scope.pwd=="12345")
       {
     

      
          $location.path("Course/SuccessPage");         

        alert("Login Success");

       }
       else
       {
        alert("Username or Password incorrect");
        $scope.txt1='';
        $scope.txt2='';

       }
       
     };
     //alert("hello");
   
     
    }  )
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
  }
})();
