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

  function adminCtrl($scope,$location) {
    var vm = this;
    vm.ctrlName = 'adminCtrl';
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
  }

})();
