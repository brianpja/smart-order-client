(function() {
  'use strict';

  angular.module('app')
    .component('home', {
      controller,
      bindings: {
        currentOrder: '=',
        showHome: '=',
        showCheckout: '='
      },
      templateUrl: "home/home-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;

      vm.items = [];


      vm.$onInit = function() {
        vm.getItems();
      }

      vm.getItems = function() {
        $http.get('http://localhost:8000/items')
          .then((response) => {
            console.log(response.data)
            vm.items = response.data.map(ele => {
              ele.qty = "Qty";
              return ele;
            });
          })
      }

      vm.addItem = function(item) {
        vm.currentOrder.push(item);
        console.log(vm.currentOrder);

      }
    }
}());
