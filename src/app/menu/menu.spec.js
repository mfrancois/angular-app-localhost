describe("MenuCtrl", function () {
    var ctrl, scope;

    beforeEach(module('dist.menu'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('MenuCtrl', {$scope: scope});
    }));

    it("should create \"menus\" model with 3 items", function () {
        expect(scope.menus.length).toBe(3);
    });
});