'use strict';

angular.module('user',['ui.router'])

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

    });
});