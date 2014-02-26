describe('ivYearsMonths', function () {
    'use strict';

    beforeEach(module('ivYearsMonths', 'ivYearsMonths/ivYearsMonths.tpl.html'));

    var $scope, years$, months$;

    beforeEach(inject(function ($compile, $rootScope) {
        var $elm;
        $scope = $rootScope.$new();
        $elm = $compile('<form name="testForm"><div iv-years-months ng-model="total"></form>')($scope);
        $scope.total = 0;
        $scope.$digest();

        years$ = $elm.find('input').eq(0);
        months$ = $elm.find('input').eq(1);
    }));

    it('should convert total to years & months', function () {
        $scope.total = 125;
        $scope.$digest();

        expect(years$.val()).toEqual('10');
        expect(months$.val()).toEqual('5');
    });

    it('should write back values to model', function () {
        years$.val(5);
        months$.val(2);
        months$.triggerHandler('change');

        expect($scope.total).toBe(62);
    });

    it('should handle only years', function () {
        years$.val(5);
        months$.val('');
        months$.triggerHandler('change');

        expect($scope.total).toBe(60);
    });

    it('should handle only months', function () {
        years$.val('');
        months$.val(2);
        months$.triggerHandler('change');

        expect($scope.total).toBe(2);
    });

    it('should handle null model', function () {
        $scope.total = null;
        $scope.$digest();

        expect(years$.val()).toEqual('');
        expect(months$.val()).toEqual('');
    });

    it('should epty model when inputs are both empty strings', function () {
        //set an initial val
        $scope.total = 16;
        $scope.$digest();

        years$.val('');
        months$.val('');
        months$.triggerHandler('change');

        expect($scope.total).toBeUndefined();
    });

    it('should handle undefined model', function () {
        delete $scope.total;
        $scope.$digest();

        expect(years$.val()).toEqual('');
        expect(months$.val()).toEqual('');
    });
});
