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
    ]);
  
angular
    .module('Create')
   .config(config) 
  .factory('list',function (){
      var courselist =[];
      return{
      getallcourse : function (){
        return courselist;
      },
      setallcourse : function (list) {
        courselist=list;
      }
    }
    })
   .factory('slist',function (){
      var studentlist =[];
      return{
      getallstud : function (){
        return studentlist;
      },
      setallstud : function (slist) {
        studentlist=slist;
      }
    }
    });
  
  function config($urlRouterProvider,$stateProvider) {
    $stateProvider
      .state('Course.Create', {
        url: '/Create',
        views: {
          '@': {
            url: '/Create',
            templateUrl: 'Create/Login.html',
            controller: 'CreateCtrl',
            controllerAs:'vm'
          }
        }
      })
      .state('Course.Create.view',{
        url:'/view',
         views: {
          '@':{
        templateUrl:'Create/view.tpl.html',
        controller:'CreateCtrl',
        controllerAs: 'vm'
      }
    }
         
      })
      .state('Course.AddSuccess',{
        url:"/AddSuccess",
        views:{
          '@':{
        templateUrl:"Create/AddSuccess.tpl.html",
        container:'CreateCtrl',
        controllerAs: 'vm'
        
      }
    }
   
      })
       .state('Course.Create.sview',{
        url:'/sview',
        views:{
          '@':{
            url:'/sview',
            templateUrl:'student/sview.tpl.html',
            controller:'CreateCtrl',
            controllerAs:'vm'  
          }
        }
      })
    .state('Course.welcome', {
      url: '/welcome',
      views: {
        '@': {
          url: '/welcome',
          templateUrl: 'Create/welcome1.tpl.html',
          controller: 'CreateCtrl as vm'
        }
      }
    })
      
  }
})();
