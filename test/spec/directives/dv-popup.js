'use strict';

describe('Directive: dvPopup', function () {

  // load the directive's module
  beforeEach(module('teamTmntApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<button class="trigger">Click Me</button><div dv-popup=".trigger"><div class="popup-guts"></div></div>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.children('.popup').attr('style')).toBe('display: none');
    expect(element.children('.popup').eq(0).find('div').hasClass('popup-guts')).toBe(true);
  }));
});
