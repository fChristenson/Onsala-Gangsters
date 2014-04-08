'use strict';

angular.module('user',['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  var path = 'modules/user/views/';

  $stateProvider
    .state('user', {
      url: '/',
      templateUrl: path + 'user.html',
      controller: 'MainCtrl'
      
    })
    .state('user.timeline', {
      url: '/timeline',
      templateUrl: path + 'user.timeline.html',
      controller: 'TimelineCtrl'

    })
    .state('user.profile', {
      url: '/profile',
      templateUrl: path + 'user.profile.html',
      controller: 'ProfileCtrl'

    })
    .state('user.skills', {
      url: '/skills',
      templateUrl: path + 'user.skills.html',
      controller: 'SkillsCtrl'

    });
});