(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name registerCtrl
   *
   * @description
   *
   */
  angular
    .module('register')
    .controller('registerCtrl', registerCtrl);

  function registerCtrl($rootScope) { 
    var vm = this;
    vm.logincredentials=logincredentials;
    function logincredentials(firstName,lastName,username,password){
      
      $rootScope.login.push({'fname':vm.firstName,'lname':vm.lastName,'uname' :vm.username,'pass' :vm.password});
      console.log($rootScope.login);
      alert("User added Successfully");
    }
  }
})();
