(function() {
  'use strict';

  angular.module('app')
    .component('home', {
      controller,
      bindings: {
        currentOrder: '=',
        showHome: '=',
        showCheckout: '=',
        userData: '=',
      },
      templateUrl: "home/home-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;

      vm.items = [];


      vm.$onInit = function() {
        vm.getItems(vm.userData);
      }

      vm.getItems = function(userData) {
        orderService.getItems(userData)
          .then((response) => {
            vm.items = response.data.map(ele => {
              ele.qty = "Qty";
              return ele;
            });
          })
      }

      vm.addItemToOrder = function(item) {
        vm.currentOrder.push(item);
      }


    }
}());
