(function() {
    'use strict';
    angular
        .module('login1')
        .controller('Logincontroller', Logincontroller);

    function Logincontroller($scope, $location, list1, coursedata, $state) {

        var vm = this;
        console.log(coursedata);

        vm.ctrlName = 'Logincontroller';
        $scope.candidate = [];
        var mobj = [];
        $scope.map = coursedata.dmpbranch;
        $scope.br = coursedata.branches;
        $scope.dg = coursedata.degrees;
        $scope.username1 = $scope.username;
        $scope.password1 = $scope.password;
        $scope.work = function() {
            if ($scope.username == 'pgk' && $scope.password == '12345') {
                alert("Username and Password is correct");
                console.log($scope.updatelst);
                $state.go("SuccessPage");
            }

        };
        $scope.getBranchNameFromId = function(branchId) {
            for (var i = 0; i < $scope.br.length; i++) {
                console.log($scope.br.length);
                console.log($scope.br[i].id, branchId);
                console.log(i);
                if ($scope.br[i].id == branchId) {
                    console.log($scope.br[i].id, $scope.br[i].value)
                    return $scope.br[i].value;
                }
            }
        }

        $scope.updateBranch = function(abc) {
            $scope.updatelst = [];
            console.log(abc.id);
            console.log($scope.map[0].DegreeId);
            angular.forEach($scope.map, function(value, index) {
                console.log(value.DegreeId, index, abc.id);
                if (abc.id == value.DegreeId) {
                    console.log(value.DegreeId);
                    angular.forEach(value.Branches, function(val, ind) {
                        console.log(val, ind);
                        $scope.updatelst.push($scope.getBranchNameFromId(val));
                    });
                }
            });
            console.log($scope.updatelst);
        }



        $scope.deg1 = $scope.deg;
        $scope.br1 = $scope.br;
        console.log($scope.deg);
        $scope.add = function() {

            $scope.candidate.push(new $scope.add1());

            console.log($scope.candidate);
        };
        $scope.add1 = function() {
            return (this.degree = $scope.deg.value, this.branch = $scope.br1)
        }
        $scope.move = function() {
            $state.go("candidate");
        }


    }
}());
