(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('admin')
    .controller('adminCtrl', adminCtrl);

  function adminCtrl($scope,$location,$rootScope) {
    var vm = this;
    $rootScope.login2=true;
    vm.ctrlName = 'adminCtrl';
      $scope.chk=function()
     {
       $rootScope.uname=$scope.txt1;
       $scope.pwd=$scope.txt2;
       if($scope.uname=="pramod" && $scope.pwd=="12345")
       {
     

           $rootScope.login1 = true;
           $rootScope.login2=false;
          $location.path("Course/WelcomePage");         
          console.log($scope.login);
        alert("Login Success");

       }
       else
       {
        alert("Username or Password incorrect");
        $scope.txt1='';
        $scope.txt2='';

       }
        $rootScope.logout = function () {
        $scope.login=false;
        $location.path('/');
        location.reload();
      };
     };
  }

})();
