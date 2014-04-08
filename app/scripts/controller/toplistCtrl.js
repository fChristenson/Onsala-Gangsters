'use strict';
angular.module('onsalaGangstersApp')

.controller('ToplistCtrl', ['$scope', function($scope){

  $scope.dataset = [];
 
  for (var i = 6 - 1; i >= 0; --i) {
    $scope.dataset.push( {name:'foo', class:'gangbanger', respect:'10'});
  }

}]);