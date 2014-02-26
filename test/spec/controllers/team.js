'use strict';

describe('Controller: TeamctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('teamTmntApp'));

  var TeamctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamctrlCtrl = $controller('TeamctrlCtrl', {
      $scope: scope,
      team: 10
    });
  }));

  it('should attach a team to the scope', function () {
    expect(scope.team).toBe(10);
  });
});
