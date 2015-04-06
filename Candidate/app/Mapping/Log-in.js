(function() {
    'use strict';

    angular
        .module('login1', [
            'ui.router'
        ])
    .config(config) 
  .factory('list1',function (){
      var courselist =[];
      return{
      getallcourse : function (){
        return courselist;
      },
      setallcourse : function (list1) {
        courselist=list1;
      }
    }
    })

    function config($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('Log-in/login');
        $stateProvider
            .state('Course.log', {
                url: '/log',
                 views: {
                '@': {
                templateUrl: 'Mapping/Log-in.html',
                controller: 'Logincontroller'
                }
              }
            })
            .state('SuccessPage', {
                url: "/SuccessPage",
                templateUrl: "Mapping/SuccessPage.html"
            })
             .state('SuccessPage.show', {
                url: "/ViewPage",
                templateUrl: "Mapping/show.html"
            })
            .state('SuccessPage.candidate', {
                url: "/candidate",
               /* views:{
                '@':{*/

                     templateUrl: "Mapping/Candidate.html"
                  /*   controller:'Logincontroller'
                }
            }*/
               
            });
           

    }
})();
