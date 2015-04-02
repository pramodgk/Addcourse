(function() {
    'use strict';

    /**
     * @ngdoc object
     * @name home.controller:HomeCtrl
     *
     * @description
     *
     */
    angular
        .module('Create')
        .controller('CreateCtrl', CreateCtrl);

    function CreateCtrl($scope, $location,list,slist) {
        var vm = this;
        $scope.view1 = false;
        var id = 0;
        $scope.regNo=1;
        vm.ctrlName = 'CreateCtrl';
        $scope.newcourse = [];
        $scope.students=[];
        $scope.list = ['Computer Science', 'Computer Application', 'Information Technology', 'Mechanical', 'Electronics', 'Electrical and Electronics', 'Mathematics', 'Statistics'];
        $scope.chk1 = function() {
            $scope.uname = $scope.txt1;
            $scope.pwd = $scope.txt2;
            if ($scope.uname == "pramod" && $scope.pwd == "12345") {



                $location.path("Course/SuccessPage");

                alert("Login Success");

            } else {
                alert("Username or Password incorrect");
                $scope.txt1 = '';
                $scope.txt2 = '';

            }

        };
        init();

        function init() {
            if (list.getallcourse()) {
                $scope.newcourse = list.getallcourse();
                
            }
            if(slist.getallstud()){
              $scope.students=slist.getallstud();
            }
        }
        $scope.add = function() {

            this.id = id++, this.cname = $scope.cname, this.courses = $scope.courses, this.intake = $scope.intake, this.csdate = $scope.csdate, this.eligible = $scope.eligible
            console.log(id);
        }
        activate();

        function activate() {}

           $scope.add1=function(){
          this.rno=document.getElementById("rno").value,this.fname=$scope.fname,this.lname=$scope.lname,this.dob=$scope.dob,this.degree=$scope.peopleArrayValue1.cname,this.branch=$scope.branch,this.doj=$scope.doj;
          $scope.regNo++;
        }
        $scope.addStud=function(){
          $scope.students.push(new $scope.add1());
          console.log($scope.students);
          console.log(document.getElementById("rno"));
          slist.setallstud($scope.students);
          console.log($scope.students.fname);
          alert("AddSuccess");
        }

        $scope.addcourse = function() {
            $scope.newcourse.push(new $scope.add());
            console.log($scope.newcourse);
            list.setallcourse($scope.newcourse);
            $scope.cname = '';
            $scope.courses = '';
            $scope.intake = '';
            $scope.csdate = '';
            $scope.eligible = '';
            alert("Added Successfully!!")
                /*$location.path("Course/AddSuccess");*/
        }
        $scope.clear = function() {
            $scope.cname = '';
            $scope.courses = '';
            $scope.intake = '';
            $scope.csdate = '';
            $scope.eligible = '';
        }
        $scope.view = function() {
            if (id != 0) {
                $scope.view1 = true;
            } else {
                alert("Data not avilable");
                return;
            }
        }
      

    }

})();
