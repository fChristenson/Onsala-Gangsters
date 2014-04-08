'use strict';
angular.module('shop')

.controller('ShopCtrl', ['$scope', function($scope){
    $scope.headIsActive = false;
    $scope.chestIsActive = false;
    $scope.legsIsActive = false;
    $scope.feetIsActive = false;
    $scope.weaponIsActive = false;

    $scope.dataset = [];

    for (var i = 6 - 1; i >= 0; i--) {
      $scope.dataset.push({name: 'Item', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', stats: '+1 power, +2 health', cost: 10});
    }

    $scope.showHead = function(){
        $scope.headIsActive = true;
        $scope.chestIsActive = false;
        $scope.legsIsActive = false;
        $scope.feetIsActive = false;
        $scope.weaponIsActive = false;
      };

    $scope.showChest = function(){
        $scope.headIsActive = false;
        $scope.chestIsActive = true;
        $scope.legsIsActive = false;
        $scope.feetIsActive = false;
        $scope.weaponIsActive = false;
      };

    $scope.showLegs = function(){
        $scope.headIsActive = false;
        $scope.chestIsActive = false;
        $scope.legsIsActive = true;
        $scope.feetIsActive = false;
        $scope.weaponIsActive = false;
      };

    $scope.showFeet = function(){
        $scope.headIsActive = false;
        $scope.chestIsActive = false;
        $scope.legsIsActive = false;
        $scope.feetIsActive = true;
        $scope.weaponIsActive = false;
      };

    $scope.showWeapon = function(){
          $scope.headIsActive = false;
          $scope.chestIsActive = false;
          $scope.legsIsActive = false;
          $scope.feetIsActive = false;
          $scope.weaponIsActive = true;
        };
  }]);