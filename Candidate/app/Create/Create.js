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
    .module('Create', [
      'ui.router'
    ])
    .controller("CreateCtrl",function($scope,$location){
      $scope.newcourse=[];
      $scope.list = ['Computer Science','Computer Application', 'Information Technology', 'Mechanical', 'Electronics', 'Electrical and Electronics', 'Mathematics', 'Statistics'];
      $scope.chk1=function()
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
     $scope.add=function()
     {
      this.cname=$scope.cname,this.courses=$scope.courses,this.intake=$scope.intake,this.csdate=$scope.csdate,this.eligible=$scope.eligible
     }
     $scope.addcourse=function()
     {
        $scope.newcourse.push(new $scope.add());
        console.log($scope.newcourse[0]);
        $location.path("Course/AddSuccess");
     }
    })
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('Course.Create', {
        url: '/Create',
        views: {
          '@': {
            url: '/Create',
            templateUrl: 'Create/Login.html'
          }
        }
      })
      .state('Course.AddSuccess',{
        url:"/AddSuccess",
        views:{
          '@':{

        templateUrl:"Create/AddSuccess.tpl.html"
      }
    }
      });
  }
})();
