'use strict';
angular.module('user').controller('SkillsCtrl', ['$scope', function($scope){
    $scope.dataset = [];

    for (var i = 6 - 1; i >= 0; --i) {
      $scope.dataset.push({name: 'Depressing Poem', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', level: 2, time: '10h'});
    }

  }]);