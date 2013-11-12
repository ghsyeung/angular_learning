'use strict';

describe('Controller: GratitudesctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('perkedProtoAppApp'));

  var GratitudesctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GratitudesctrlCtrl = $controller('GratitudesctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of gratitudes to the scope', function () {
    expect(scope.gratitudes.length).to.equal(3);
    _.each(scope.gratitudes, function(g) {
      alert(g);
      expect(g).to.have.property('message');
    });
  });
});
