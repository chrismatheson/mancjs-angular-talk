/*globals angular, moment, document*/
angular.module('app', ['ivYearsMonths'])
    .directive('countup', function($interval) {
        return {
          restrict: 'EA',
          scope: true,
          link: function(scope, element, attrs, tabsCtrl) {
              var interval = parseInt(attrs.interval);
              $interval(function () {
                  var diff = moment().diff(moment(attrs.since));
                  scope.months = moment(diff).format('M');
                  scope.days = moment(diff).format('D');
                  scope.hours = moment(diff).format('H');
                  scope.minutes = moment(diff).format('m');
                  scope.seconds = moment(diff).format('s');
              }, interval);
          }
        };
    })
    .directive('input', function () {
        'use strict';

        return {
            restrict: 'E',
            require: '?ngModel',

            link: function postLink(scope, element, attr, ngModel) {
                if (!ngModel || attr.type !== 'sortcode') {
                    return;
                }

                var regex = /[0-9]{2}[0-9]{2}[0-9]{2}/;

                function validate(inputString) {
                    var validity = regex.test(inputString) && inputString.length === 6;
                    ngModel.$setValidity('sortcode', validity);
                    return inputString;
                }

                function stripDashes(inputString) {
                    return inputString.replace(/-/g, '');
                }

                ngModel.$parsers.push(stripDashes);
                ngModel.$parsers.push(validate);
            }
        };
    })
    .directive('minAge', function () {
        'use strict';

        return {
            restrict: 'A',
            require: ['ngModel', 'timestampDate'],
            link: function (scope, element, attrs, ctrls) {
                var ngModel, min;
                ngModel = ctrls[0];

                min = parseInt(attrs.minAge, 10);

                if (!angular.isNumber(min)) {
                    throw new Error('min-value must be a number');
                }

                function isOverMaxValue(val) {
                    //ignore empty strings
                    if (!val) {
                        return val;
                    }
                    var datum, testVal;

                    datum = moment().subtract('y', min);
                    testVal = moment(val);

                    if (!datum.isValid() || !testVal.isValid()) {
                        return undefined;
                    }

                    if (testVal.isAfter(datum)) {
                        ngModel.$setValidity('min-age', false);
                        return undefined;
                    }

                    ngModel.$setValidity('min-age', true);
                    return val;
                }

                ngModel.$parsers.push(isOverMaxValue);
            }
        };
    });

/**
 * Lets try this with POJS bitches!!!
 */
function playAllVideo() {
    document.querySelector('#grunt').play();
    document.querySelector('#gulp').play();
}
