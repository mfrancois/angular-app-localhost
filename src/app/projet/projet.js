angular.module('dist.projet', [
        'ui.state',
        'titleService',
        'ngResource',
        'dist.config'
    ])

    .config(function config($stateProvider) {
        $stateProvider.state('projet', {
            url: '/projet',
            views: {
                "main": {
                    controller: 'ProjetCtrl',
                    templateUrl: 'projet/projet.tpl.html'
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
    .controller('ProjetCtrl', function AboutCtrl($scope, titleService, Project,ngProgress) {
        titleService.setTitle('What is It?');

        $scope.projects = Project.query();
        $scope.mdproject = '';
        $scope.current_selection = '';

        $scope.open = function (data) {
            ngProgress.reset();
            ngProgress.start();
            Project.get({project: data.folder}, function (projectmardown) {
                $scope.current_selection = ': ' + data.folder;
                var result = unescape(projectmardown.result);
                result = result.replace(/\+/g, ' ');
                var converter = new Showdown.converter();
                $scope.mdproject = converter.makeHtml(result);
                ngProgress.complete();
            });
        };

    })
    .factory('Project', function ($resource,distConfig) {
        return $resource(distConfig.get_url_api('getFolders'), {}, {
            query: {method: 'GET', params: {}, isArray: true}
        });
    })

;
