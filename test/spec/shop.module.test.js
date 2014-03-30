'use strict';

describe('shop.module tests', function(){
    
    var $scope;
    beforeEach(module('shop'));
    beforeEach(inject(function($rootScope){
        $scope = $rootScope.$new();
      }));

    it('should have controller', inject(function($controller){
        $controller('ShopCtrl', {
            $scope: $scope
          });

        expect($controller).toBeDefined();
      }));
  });