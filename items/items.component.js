(function() {
  'use strict';

  angular.module('app')
    .component('items', {
      controller,
      bindings: {
        detail: '=',
      },
      templateUrl: "items/items-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;



      vm.$onInit = function() {

      }

      vm.addItem = function(item) {
        item.distributor_id = vm.detail[0].dist_id;

        orderService.addItem(item)
          .then(function(response) {
            console.log(response)
            const idObj = {id: vm.detail[0].dist_id}
            vm.refreshList(idObj);
            delete vm.newItem;
          })
      }

      vm.refreshList = function(obj) {
        orderService.getDetail(obj)
          .then(function(response) {
            vm.detail = response.data;
          })
      }
    }
}());
