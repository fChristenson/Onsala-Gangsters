'use strict';
angular.module('shop', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  var path = 'modules/shop/views/';

  $stateProvider
    .state('shop', {
      url: '/shop',
      templateUrl: path + 'shop.html',
      controller: 'ShopCtrl'
        
    })
    .state('shop.head', {
      url: '/headwear',
      templateUrl: path + 'shop.itemtable.html',
      controller: 'ShopCtrl'
        
    })
    .state('shop.chest', {
      url: '/chestguard',
      templateUrl: path + 'shop.itemtable.html',
      controller: 'ShopCtrl'
        
    })
    .state('shop.legs', {
      url: '/legwear',
      templateUrl: path + 'shop.itemtable.html',
      controller: 'ShopCtrl'
        
    })
    .state('shop.feet', {
      url: '/footwear',
      templateUrl: path + 'shop.itemtable.html',
      controller: 'ShopCtrl'
        
    })
    .state('shop.weapon', {
      url: '/weapon',
      templateUrl: path + 'shop.itemtable.html',
      controller: 'ShopCtrl'
        
    });
});