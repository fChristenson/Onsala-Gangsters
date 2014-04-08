'use strict';

angular.module('onsalaGangstersApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'user',
  'shop'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('toplist', {
        url: '/toplist',
        templateUrl: 'views/toplist.html',
        controller: 'ToplistCtrl'

      })
      .state('faq', {
        url: '/faq',
        templateUrl: 'views/faq.html',

      });
  });