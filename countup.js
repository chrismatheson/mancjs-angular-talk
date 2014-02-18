/*globals angular, moment*/
angular.module('countup', [])
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
    });
