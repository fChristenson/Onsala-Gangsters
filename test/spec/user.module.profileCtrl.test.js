'use strict';

describe('user.module.profile tests', function () {

    var profileCtrl;
    var scope;

    beforeEach(module('user'));

    beforeEach(inject(function($rootScope, $controller){
      scope = $rootScope.$new();
      profileCtrl = $controller('ProfileCtrl', {
          $scope: scope
        });
    }));

    it('should be created', function(){
        expect(profileCtrl).toBeDefined();

      });
  });