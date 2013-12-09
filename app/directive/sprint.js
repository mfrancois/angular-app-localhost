'use strict';

project.directive('sprint', function () {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'app/tpl/partials/sprint.html',
        controller: function ($scope) {
            $scope.total = 0;

            $scope.changeCalcule = function () {
                var zero = $scope.getNumber($scope.tzero);
                var un = $scope.getNumber($scope.tun);

                $scope.total = Math.round((( zero * 1.15 ) + ( un * 2.3  )) / 7);
            }

            $scope.getNumber = function(val){
                if (val == '' || typeof(val) == 'undefined') {
                    val = 0
                }
                return val;
            }
        }


    }
});
