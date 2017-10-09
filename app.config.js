(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state({
        name: 'root',
        component: 'root',
        abstract: true
      })
      .state({
        name: 'home',
        url: '',
        component: 'home',
        parent: 'root'
      })
      .state({
        name: 'checkout',
        url: '/checkout',
        component: 'checkout',
        parent: 'root'
      })
  }

}());
