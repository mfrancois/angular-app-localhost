angular.module('dist.terminal', [
        'ui.keypress',
        'dist.config'
    ]).
    directive('terminal', function () {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'terminal/terminal.tpl.html',
            controller: function ($scope, distConfig,$http,ngProgress) {
                $scope.commande = '';
                $scope.result = null;
                $scope.submit = function () {
                    var data = {
                        'commande': $scope.commande
                    };

                    ngProgress.reset();
                    ngProgress.start();

                    $http({
                        url: distConfig.get_url_api('terminal'),
                        method: "POST",
                        data: data,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: function (obj) {
                            var str = [];
                            for (var p in obj) {
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            }
                            return str.join("&");
                        }
                    }).success(function (data) {
                            $scope.result = data;
                            ngProgress.complete();
                        });

                };
            }
        };
    })
;
