angular.module('ivYearsMonths', [])

.directive('ivYearsMonths', ['$filter', function ($filter) {
    'use strict';

    return {
        priority: 0,
        replace: true,
        restrict: 'EA',
        require: 'ngModel',
        templateUrl: 'ivYearsMonths/ivYearsMonths.tpl.html',
        link : function (scope, element, attr, ngModel) {
            var $years, $months, $inputs, minValidator;

            /* two way binding from inputs to ivModel*/
            $inputs = element.find('input');
            $years  = $inputs.eq(0);
            $months = $inputs.eq(1);

            ngModel.$render = function renderYearsMonths() {
                if (angular.isNumber(ngModel.$modelValue)) {
                    $months.val(ngModel.$modelValue % 12);
                    $years.val(Math.floor(ngModel.$modelValue / 12));
                } else {
                    $inputs.val('');
                }
            };

            function parseInputs() {
                var years, months, valid;

                years = $years.val();
                months = $months.val();
                //if no inputs then bail
                if (years === '' && months === '') {
                    ngModel.$setViewValue(undefined);
                    return undefined;
                }
                //otherwise we want to convert the empty string to a 0 before continuing
                years = years === '' ? '0' : years;
                months = months === '' ? '0' : months;

                years  = parseInt(years, 10);
                months = parseInt(months, 10);

                if (isNaN(years) && isNaN(months)) {
                    ngModel.$setViewValue(undefined);
                } else {
                    ngModel.$setViewValue((years * 12) + months);
                }

                //change has happened, so set dirty
                $inputs.removeClass('ng-pristine');
                $inputs.addClass('ng-dirty');
            }

            $inputs.addClass('ng-pristine');

            scope.$destroy(function () {
                $inputs.off('input', parseInputs);
            });
            $inputs.on('input', parseInputs);
        }
    };
}]);
