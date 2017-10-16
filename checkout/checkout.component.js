(function() {
  'use strict';

  angular.module('app')
    .component('checkout', {
      controller,
      bindings: {
        currentOrder: '=',
        showHome: '=',
        showCheckout: '=',
        userData: '='
      },
      templateUrl: "checkout/checkout-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;

      vm.items = [];
      vm.total = 0;


      vm.$onInit = function() {
        vm.getTotal();
      }

      vm.getTotal = function() {
        for (const item of vm.currentOrder) {
          vm.total += item.price * item.qty;
        }
      }

      vm.removeFromOrder = function(index) {
        vm.currentOrder.splice(index, 1);
      }

      vm.submitOrder = function(order) {
        order.user_id = vm.userData.id;
        orderService.postOrder(order)
          .then((response) => {
            vm.currentOrder = [];
          })
      }


    }
}());
