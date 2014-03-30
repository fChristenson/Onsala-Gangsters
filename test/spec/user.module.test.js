'use strict';

describe('user.module tests', function () {

    var $scope;
    beforeEach(module('user'));
    beforeEach(inject(function($rootScope){
      $scope = $rootScope.$new();
    }));

    it('should have controller', inject(function($controller){
        $controller('TimelineCtrl', {
            $scope: $scope
          });
        
        expect($controller).toBeDefined();
      }));
  });