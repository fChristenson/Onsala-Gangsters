'use strict';
angular.module('user').controller('TimelineCtrl', ['$scope', function($scope){

  $scope.imageSource = 'modules/user/view/assets/image/user.jpg';
  $scope.dataset = [];

  for (var i = 6 - 1; i >= 0; --i) {
    $scope.dataset.push({name:'foo', time:'2m ago', message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, error, nemo, alias quo repellendus nostrum consequatur repellat possimus modi ipsam minus facere tenetur id voluptate ut doloribus iste ratione fugiat.'});
  }

}]);