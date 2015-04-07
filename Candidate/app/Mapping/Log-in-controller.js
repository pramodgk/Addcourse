(function() {
    'use strict';
    angular
        .module('login1')
        .controller('Logincontroller', ['$scope', '$state', function($scope, $state,list1) {
           var vm = this;
            vm.ctrlName = 'Logincontroller';
            $scope.candidate=[];
            var mobj = [];
             $scope.updatelst =[];
            function init() {
                if (list1.getallcourse()) {
                    $scope.arr = list1.getallcourse();


                }
                  console.log($scope.arr);

            }
            $scope.degrees = [{
                "id": "d1",
                "value": "B-tech"

            }, {
                "id": "d2",
                "value": "B.E."

            }, {
                "id": "d3",
                "value": "B.Sc."
            }];
            $scope.branches = [{
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
            }];
            $scope.dmpbranch = [{
                'DegreeId': 'd1',
                'Branches': ['b1', 'b2', 'b3']
            },
            {
                'DegreeId':'d2',
                'Branches':['b2','b4']
            }
            ];

            console.log($scope.dmpbranch[0].DegreeId);
 $scope.getBranchNameFromId = function(branchId) {
                for (var i = 0; i < $scope.branches.length; i++) {
                    console.log($scope.branches[i].id,branchId);
                    if ($scope.branches[i].id == branchId) {
                        console.log($scope.branches[i].id,$scope.branches[i].value)
                        return $scope.branches[i].value;
                    }
                }
            }

            $scope.updateBranch = function(abc) {
                $scope.updatelst = [];
                console.log(abc.id);
                angular.forEach($scope.dmpbranch, function(value, index) {
                    console.log(value,index);
                    if (abc.id == value.DegreeId) {
                        console.log("in");
                        angular.forEach(value.Branches, function(val, ind) {
                            console.log(val,ind);
                            $scope.updatelst.push($scope.getBranchNameFromId(val));
                        });
                    }
                });
                console.log($scope.updatelst);
            }
           
            $scope.username1 = $scope.username;
            $scope.password1 = $scope.password;
            $scope.work = function() {
                if ($scope.username == 'pgk' && $scope.password == '12345') {
                    alert("Username and Password is correct");
                    $state.go("SuccessPage");
                }

            };

            $scope.deg1 = $scope.deg;
            $scope.br1 = $scope.br;
            console.log($scope.deg);
            $scope.add = function() {
 
                    $scope.candidate.push(new $scope.add1());

              /*  if ($scope.deg.b_id == $scope.br.b_id) {

                    $scope.arr.push($scope.deg);

                    $scope.arr.push($scope.br);
                    list1.setallcourse($scope.arr);
                    console.log($scope.deg);
                    console.log($scope.br);
                    alert("contents added");




                }*/
                console.log($scope.candidate);
            };
            $scope.add1=function()
            {
                return (this.degree=$scope.deg.value,this.branch=$scope.br)
            }
            $scope.move = function() {
                $state.go("candidate");
            }


        }]);
}());
