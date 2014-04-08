'use strict';

describe('onsalaGangstersApp.toplistCtrl tests', function(){
    
    var toplistCtrl;
    var scope;

    beforeEach(module('onsalaGangstersApp'));

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        toplistCtrl = $controller('ToplistCtrl', {
            $scope: scope
          });
      }));

    it('should be created', function(){
        expect(toplistCtrl).toBeDefined();

      });
  });