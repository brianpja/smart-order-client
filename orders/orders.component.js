(function() {
  'use strict';

  angular.module('app')
    .component('orders', {
      controller,
      bindings: {
        currentOrder: '=',
        showHome: '=',
        showCheckout: '=',
        userData: '='
      },
      templateUrl: "orders/orders-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;


      vm.$onInit = function() {
        vm.getOrders(vm.userData);
      }

      vm.getTotal = function(obj) {
        let total = 0;
        if (obj.items){

          for (const item of obj.items) {
            total += item.qty * item.price;
          }
        }
        return total;
      }

      vm.getOrders = function(userObj) {
        orderService.getOrders(userObj)
          .then(function(response) {
            vm.dataToRender = vm.createBigArray(response.data)
          })
      }

      vm.repeatOrder = function(obj) {
        vm.currentOrder = obj.items;
      }

      vm.createBigArray = function(arr) {
        const retArr = [];
        let orderObj = {};

        for (const obj of arr) {
          const itemObj = {
            name: obj.item_name,
            qty: obj.quantity,
            price: obj.price_paid,
            id: obj.item_id,
            distributor_id: obj.distributor_id
          };

          if (!orderObj.hasOwnProperty('order_id')) {
            orderObj.order_id = obj.order_id;
            orderObj.created_at = obj.created_at;
            orderObj.updated_at = obj.updated_at;
            orderObj.items = [];
            orderObj.items.push(itemObj);
          }
          else if (orderObj.order_id === obj.order_id) {
            orderObj.items.push(itemObj);
          }
          else {
            const pushObj = Object.assign({}, orderObj);
            retArr.push(pushObj);
            orderObj.order_id = obj.order_id;
            orderObj.created_at = obj.created_at;
            orderObj.updated_at = obj.updated_at;
            orderObj.items = [];
            orderObj.items.push(itemObj);
          }
        }
        if (orderObj.order_id) {
          retArr.push(orderObj);

        }
        return retArr;
      }

    }
}());
