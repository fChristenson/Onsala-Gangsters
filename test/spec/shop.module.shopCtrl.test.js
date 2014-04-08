'use strict';

describe('shop.module.shopCtrl tests', function(){
    
    var shopCtrl;
    var scope;

    beforeEach(module('shop'));

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        shopCtrl = $controller('ShopCtrl', {
            $scope: scope
          });
      }));

    it('should be created', function(){
        expect(shopCtrl).toBeDefined();

      });
  });