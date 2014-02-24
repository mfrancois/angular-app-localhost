angular.module('dist', [
        'templates-app',
        'templates-common',
        'dist.menu',
        'dist.projet',
        'dist.outils',
        'ui.state',
        'ui.route',
        'ngProgress'
    ])
    .config(function myAppConfig( $urlRouterProvider,$sceDelegateProvider) {
        $urlRouterProvider.otherwise('/projet');
        $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://api.dist-angular.dev/**']);
    })
    .run(function run(titleService) {
        titleService.setSuffix(' | distillerie');
    })

    .controller('AppCtrl', function AppCtrl($scope, $location) {
    })

;