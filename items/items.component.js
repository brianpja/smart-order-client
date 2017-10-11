(function() {
  'use strict';

  angular.module('app')
    .component('items', {
      controller,
      bindings: {
        currentOrder: '=',
        showHome: '=',
        showCheckout: '=',
        detail: '='
      },
      templateUrl: "items/items-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;


      vm.$onInit = function() {
        console.log('items detail:', vm.detail);
      }

    }
}());
