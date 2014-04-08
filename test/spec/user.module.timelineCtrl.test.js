'use strict';

describe('user.module.timeline tests', function () {

    var timelineCtrl;
    var scope;

    beforeEach(module('user'));

    beforeEach(inject(function($rootScope, $controller){
      scope = $rootScope.$new();
      timelineCtrl = $controller('TimelineCtrl', {
          $scope: scope
        });
    }));

    it('should be created', function(){
        expect(timelineCtrl).toBeDefined();

      });
  });