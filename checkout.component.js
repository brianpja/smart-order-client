(function() {
  'use strict';

  angular.module('app')
    .component('checkout', {
      controller,
      templateUrl: "checkout-template.html"

    })

    controller.$inject = ['$state', '$http']
    function controller($state, $http) {
      const vm = this;

      vm.items = [];

      vm.$onInit = function() {

      }


    }
}());
