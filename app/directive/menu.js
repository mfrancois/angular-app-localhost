'use strict';

project.directive('menuGauche', function () {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'app/tpl/partials/menu-liste.html',
        controller: function ($scope, $location) {
            $scope.menus =
                [
                    {
                        'class': 'active',
                        'icon': 'icon-book',
                        'libelle': 'Projets',
                        'link': '/#/'

                    },
                    {
                        'class': '',
                        'icon': 'icon-tag',
                        'libelle': 'Outils',
                        'link': '/#/tools'
                    },
                    {
                        'class': '',
                        'icon': 'icon-fire',
                        'libelle': 'Mysql',
                        'link': '/mysql'
                    }
                ];

            for (var i in $scope.menus) {
                $scope.menus[i].class = ('/#' + $location.$$path == $scope.menus[i].link) ? 'active' : '';
            }
        }
    }
});
