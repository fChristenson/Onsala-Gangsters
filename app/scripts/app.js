'use strict';

angular.module('onsalaGangstersApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        
      })
      .state('main.timeline', {
        url: '/timeline',
        templateUrl: 'views/main.timeline.html',
        controller: 'TimelineCtrl'

      })
      .state('main.profile', {
        url: '/profile',
        templateUrl: 'views/main.profile.html',
        controller: 'ProfileCtrl'

      })
      .state('main.skills', {
        url: '/skills',
        templateUrl: 'views/main.skills.html',
        controller: 'SkillsCtrl'

      })
      .state('toplist', {
        url: '/toplist',
        templateUrl: 'views/toplist.html',
        controller: 'ToplistCtrl'

      })
      .state('faq', {
        url: '/faq',
        templateUrl: 'views/faq.html',
        controller: 'FaqController'

      });
  });
