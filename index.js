/*<![CDATA[*/
var app = angular
    .module("packranks", [])
    .controller("packranksController", function ($scope, $http, $q) {
        $scope.departmentSelected = false;
        $scope.hasTimeout = false;
        $scope.department = "";

        $scope.selectDepartment = function () {
            $http
                .get(
                    `https://ncsu-schedule.herokuapp.com/department/${$scope.department}`,
                    { timeout: 5000 }
                )
                .then(
                    (res) => {
                        $scope.classes = res.data;
                        if ($scope.classes.length > 0) {
                            $scope.departmentSelected = true;
                        }
                    },
                    (err) => {
                        $scope.hasTimeout = true;
                        $scope.hasError = true;
                    }
                );
        };
    });
/*]]>*/
