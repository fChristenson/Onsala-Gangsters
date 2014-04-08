'use strict';
angular.module('user').controller('MainCtrl', ['$scope', function ($scope) {
    $scope.timelineIsActive = false;
    $scope.profileIsActive = false;
    $scope.shopIspActive = false;

    $scope.showTimeline = function(){
        $scope.timelineIsActive = true;
        $scope.profileIsActive = false;
        $scope.shopIsActive = false;
      };

    $scope.showProfile = function(){
        $scope.profileIsActive = true;
        $scope.timelineIsActive = false;
        $scope.shopIsActive = false;
      };

    $scope.showShop = function(){
        $scope.shopIsActive = true;
        $scope.timelineIsActive = false;
        $scope.profileIsActive = false;
      };

  }]);