(function() {
    'use strict';

    angular
        .module('login1', [
            'ui.router']);
        angular
    .module('login1')
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
 .factory('coursedata', function(){

    /* @ngInject */
  
        return {
            degrees: [{
                "id": "d1",
                "value": "B-tech"

            }, {
                "id": "d2",
                "value": "B.E."

            }, {
                "id": "d3",
                "value": "B.Sc."
            }],
            branches: [{
                "id": "b1",
                "value": "Computer Science"
            }, {
                "id": "b2",
                "value": "EC"
            }, {
                "id": "b3",
                "value": "EN"
            }, {
                "id": "b4",
                "value": "ME"
            }],
            dmpbranch: [{
                'DegreeId': 'd1',
                'Branches': ['b1', 'b2', 'b3']
            }, {
                'DegreeId': 'd2',
                'Branches': ['b2', 'b4']
            }]
        };
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
                url: "/show",
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
