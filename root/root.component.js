(function() {
  'use strict';

  angular.module('app')
    .component('root', {
      controller,
      templateUrl: "root/root-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;

      vm.items = [];
      vm.currentOrder = [];

      vm.$onInit = function() {
        vm.showHome = true;
        vm.showCheckout = false;
        vm.showDist = false;
        vm.showOrders = false;
        vm.showDetail = false;
      }

      vm.goHome = function() {
        vm.showHome = true;
        vm.showCheckout = false;
        vm.showDist = false;
        vm.showOrders = false;
        vm.showDetail = false;
      }

      vm.goCheckout = function() {
        vm.showHome = false;
        vm.showCheckout = true;
        vm.showDist = false;
        vm.showOrders = false;
        vm.showDetail = false;
      }

      vm.goDist = function() {
        vm.showHome = false;
        vm.showCheckout = false;
        vm.showDist = true;
        vm.showOrders = false;
        vm.showDetail = false;
      }

      vm.goOrders = function() {
        vm.showHome = false;
        vm.showCheckout = false;
        vm.showDist = false;
        vm.showOrders = true;
        vm.showDetail = false;
      }

    }
}());
