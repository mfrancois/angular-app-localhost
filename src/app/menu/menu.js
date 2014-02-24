angular.module('dist.menu', [
        'ui.state'
    ])
    .controller('MenuCtrl', function MenuCtrl($scope) {

        $scope.menus =
            [
                {
                    'class': '',
                    'icon': 'icon-home',
                    'libelle': 'Projets',
                    'link': '/#/projet'

                },
                {
                    'class': '',
                    'icon': 'icon-edit',
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
    })

;
