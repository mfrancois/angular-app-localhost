angular.module('dist.outils', [
        'ui.state',
        'titleService',
        'dist.sprint',
        'dist.terminal'
    ])

    .config(function config($stateProvider) {
        $stateProvider.state('tools', {
            url: '/tools',
            views: {
                "main": {
                    controller: 'OutilCtrl',
                    templateUrl: 'outils/outils.tpl.html'
                },
                "menu": {
                    controller: 'MenuCtrl',
                    templateUrl: 'menu/menu.tpl.html'
                },
                "footer": {
                    templateUrl: 'footer/footer.tpl.html'
                }
            }
        });
    })
    .controller('OutilCtrl', function OutilCtrl($scope, titleService) {
        titleService.setTitle('What is It?');
    })
;
