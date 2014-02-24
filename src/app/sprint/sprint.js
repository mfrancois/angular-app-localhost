angular.module( 'dist.sprint', [] )
    . directive('sprint', function () {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'sprint/sprint.tpl.html',
            controller: function ($scope) {
                $scope.total = 0;
                $scope.changeCalcule = function () {
                    var zero = $scope.getNumber($scope.tzero);
                    var un = $scope.getNumber($scope.tun);

                    $scope.total = Math.round((( zero * 1.15 ) + ( un * 2.3  )) / 7);
                };

                $scope.getNumber = function (val) {
                    if (typeof(val) === 'undefined' || val === '') {
                        val = 0;
                    }
                    return val;
                };
            }
        };
    })
;
