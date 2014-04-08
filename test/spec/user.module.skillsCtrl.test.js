'use strict';

describe('user.module.skills tests', function () {

    var skillsCtrl;
    var scope;

    beforeEach(module('user'));

    beforeEach(inject(function($rootScope, $controller){
      scope = $rootScope.$new();
      skillsCtrl = $controller('SkillsCtrl', {
          $scope: scope
        });
    }));

    it('should be created', function(){
        expect(skillsCtrl).toBeDefined();

      });
  });