'use strict';

angular.module('onsalaGangstersApp').controller('MainCtrl', ['$scope', function ($scope) {
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

  }])

.controller('ProfileCtrl', ['$scope', function($scope){
    
    $scope.user = {img: '/images/user_big.png', name: 'Foo Bar', class: 'Emo', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, optio, vero, soluta laborum vel nobis provident debitis assumenda necessitatibus dolorum culpa quod laudantium saepe. Laudantium magni amet deleniti repellat dolores?'};
 
  }])

.controller('SkillsCtrl', ['$scope', function($scope){
    $scope.dataset = [];

    for (var i = 6 - 1; i >= 0; --i) {
      $scope.dataset.push({name: 'Depressing Poem', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', level: 2, time: '10h'});
    }

  }])

.controller('TimelineCtrl', ['$scope', function($scope){

  $scope.imageSource = 'images/user.jpg';
  $scope.dataset = [];

  for (var i = 6 - 1; i >= 0; --i) {
    $scope.dataset.push({name:'foo', time:'2m ago', message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, error, nemo, alias quo repellendus nostrum consequatur repellat possimus modi ipsam minus facere tenetur id voluptate ut doloribus iste ratione fugiat.'});
  }

}])

.controller('ToplistCtrl', ['$scope', function($scope){

  $scope.dataset = [];
 
  for (var i = 6 - 1; i >= 0; --i) {
    $scope.dataset.push( {name:'foo', class:'gangbanger', respect:'10'});
  }

}]);
