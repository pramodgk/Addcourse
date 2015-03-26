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
    .module('student', [
      'ui.router'
    ])
    .controller("StudentCtrl",function(){

     
    })
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('Course.student', {
        url: '/student',
        views: {
          '@': {
            url: '/student',
            templateUrl: 'student/student.tpl.html'
          }
        }
      })
      /*.state('std',{
        url:'/std',
        views:{
          '@':{
            url:'/std',
            templateUrl:'student/student.tpl.html'
          }
        }
        })
      */
      .state('Course.student.std', {
        url: '/ug',
        templateUrl: 'student/ug.html'
      })
      .state('Course.student.std1', {
        url: '/ug',
        templateUrl: 'student/pg.html'
      });
  }
})();
