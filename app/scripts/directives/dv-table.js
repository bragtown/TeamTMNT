'use strict';

angular.module('teamTmntApp')
  .directive('dvTable', function () {
    return {
      template: '<div><table><thead><tr><th ng-repeat="header in dvTableHeaders">{{ header }}</th></tr></thead><tbody><tr ng-repeat="row in dvTable"><td ng-repeat="value in row">{{ value }}</td></tr></tbody></table></div>',
      restrict: 'A',
      scope: {
        dvTable: '=',
        dvTableHeaders: '='
      }
    };
  });
