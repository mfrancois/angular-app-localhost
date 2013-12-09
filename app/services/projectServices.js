angular.module('projectServices', ['ngResource']).
    factory('Project', function ($resource) {
        return $resource('app/script/getFolders.php', {}, {
            query: {method: 'GET', params: {}, isArray: true}
        });
    });
