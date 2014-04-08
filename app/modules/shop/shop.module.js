'use strict';
angular.module('shop', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('shop', {
      url: '/shop',
      templateUrl: 'modules/shop/view/shop.html',
      controller: 'ShopCtrl'
        
    })
    .state('shop.head', {
      url: '/headwear',
      templateUrl: 'modules/shop/view/shop.itemtable.html',
      controller: 'ShopCtrl'
        
    })
    .state('shop.chest', {
      url: '/chestguard',
      templateUrl: 'modules/shop/view/shop.itemtable.html',
      controller: 'ShopCtrl'
        
    })
    .state('shop.legs', {
      url: '/legwear',
      templateUrl: 'modules/shop/view/shop.itemtable.html',
      controller: 'ShopCtrl'
        
    })
    .state('shop.feet', {
      url: '/footwear',
      templateUrl: 'modules/shop/view/shop.itemtable.html',
      controller: 'ShopCtrl'
        
    })
    .state('shop.weapon', {
      url: '/weapon',
      templateUrl: 'modules/shop/view/shop.itemtable.html',
      controller: 'ShopCtrl'
        
    });
});