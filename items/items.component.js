(function() {
  'use strict';

  angular.module('app')
    .component('items', {
      controller,
      bindings: {
        detail: '=',
        distributor: '='
      },
      templateUrl: "items/items-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;

      vm.$onInit = function() {
        vm.form = false;
        console.log(vm.distributor)
      }

      vm.addItem = function(item) {
        item.distributor_id = vm.distributor.id;

        orderService.addItem(item)
          .then(function(response) {
            console.log(response)
            const idObj = {id: vm.distributor.id}
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

      vm.deleteItem = function(item) {
        orderService.deleteItem(item)
          .then(function(response) {
            console.log(response)
            const idObj = {id: vm.detail[0].dist_id}
            vm.refreshList(idObj);
          })
      }

      vm.showForm = function() {
        vm.form = !vm.form;
        vm.editDist = Object.assign({}, vm.distributor);
      }

      vm.updateDist = function(obj) {
        orderService.updateDist(obj)
          .then(function(response) {
            console.log(response);
            vm.distributor = response.data;
            vm.showForm();
          })
      }
    }
}());
