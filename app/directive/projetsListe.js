'use strict';

project.directive('projetListe', function(){
    return {
        restrict: 'E',
        scope:true,
        templateUrl: 'app/tpl/partials/projet-liste.html',
        controller: function ($scope, Project,ngProgress) {
            $scope.projects = Project.query();
            $scope.mdproject = '';
            $scope.current_selection = '';

            $scope.open = function (data) {
                ngProgress.reset();
                ngProgress.start();

                Project.get({project: data.folder}, function (projectmardown) {
                    $scope.current_selection = ': '+data.folder;
                    var result = unescape(projectmardown.result);
                    result = result.replace(/\+/g, ' ');
                    var converter = new Showdown.converter();
                    $scope.mdproject = converter.makeHtml(result);
                    ngProgress.complete();
                });
            };
        }
    }
});
