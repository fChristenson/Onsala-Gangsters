'use strict';

angular.module('onsalaGangstersApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router',
  'user',
  'shop'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('user', {
        url: '/',
        templateUrl: 'modules/user/view/user.html',
        controller: 'MainCtrl'
        
      })
      .state('user.timeline', {
        url: '/timeline',
        templateUrl: 'modules/user/view/user.timeline.html',
        controller: 'TimelineCtrl'

      })
      .state('user.profile', {
        url: '/profile',
        templateUrl: 'modules/user/view/user.profile.html',
        controller: 'ProfileCtrl'

      })
      .state('user.skills', {
        url: '/skills',
        templateUrl: 'modules/user/view/user.skills.html',
        controller: 'SkillsCtrl'

      })
      .state('shop', {
        url: '/shop',
        templateUrl: 'modules/shop/view/shop.html',
        controller: 'ShopCtrl'
          
      })
      .state('toplist', {
        url: '/toplist',
        templateUrl: 'views/toplist.html',
        controller: 'ToplistCtrl'

      })
      .state('faq', {
        url: '/faq',
        templateUrl: 'views/faq.html',

      });
  })

.controller('ToplistCtrl', ['$scope', function($scope){

  $scope.dataset = [];
 
  for (var i = 6 - 1; i >= 0; --i) {
    $scope.dataset.push( {name:'foo', class:'gangbanger', respect:'10'});
  }

}]);
