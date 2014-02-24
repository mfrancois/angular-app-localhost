'use strict';

describe('Directive: sprint', function () {
    beforeEach(module('dist'));

    var element, scope;

    beforeEach(module('sprint/sprint.tpl.html'));

    beforeEach(inject(function ($rootScope, $compile) {
        element = angular.element('<sprint></sprint>');
        scope = $rootScope;
        scope.total = 0;
        scope.changeCalcule = function () {
            var zero = scope.getNumber(scope.tzero);
            var un = scope.getNumber(scope.tun);

            scope.total = Math.round((( zero * 1.15 ) + ( un * 2.3  )) / 7);
        };

        scope.getNumber = function (val) {
            if (typeof(val) === 'undefined' || val === '') {
                val = 0;
            }
            return val;
        };

        $compile(element)(scope);
        scope.$digest();

    }));

    it("should have the correct amount of inputs", function () {
        var inputs = element.find('input');
        expect(inputs.length).toBe(2);
    });

    it("calcule to be one", function () {
        scope.tun = 1;
        scope.tzero = 2;
        scope.changeCalcule();

        expect(scope.total).toBe(1);

    });

    it("calcule to be null", function () {
        scope.tun = 'test';
        scope.tzero = 'test';
        scope.changeCalcule();
        expect(isNaN(scope.total)).toBe(true);

    });

});