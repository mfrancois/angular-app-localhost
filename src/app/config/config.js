angular.module('dist.config', [
    ])
    .constant('url_api', 'api.dist-angular.dev')
    .constant('extention', '.php')
    .factory('distConfig', function (url_api,extention) {
        this.get_url_api = function (service) {
            var protocol = '//';
            return protocol + url_api+'/'+service+extention;
        };

        return this;
    }
)
;