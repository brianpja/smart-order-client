(function() {
  'use strict';

  angular.module('app')
    .component('root', {
      controller,
      templateUrl: "root/root-template.html"

    })

    controller.$inject = ['$state', '$http']
    function controller($state, $http) {
      const vm = this;

      vm.items = [];
      vm.currentOrder = [];

      vm.$onInit = function() {
        vm.showHome = true;
        vm.showCheckout = false;
      }

      vm.goHome = function() {
        vm.showHome = true;
        vm.showCheckout = false;
      }

      vm.goCheckout = function() {
        vm.showHome = false;
        vm.showCheckout = true;
      }

    }
}());
