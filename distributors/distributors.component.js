(function() {
  'use strict';

  angular.module('app')
    .component('distributors', {
      controller,
      bindings: {
        currentOrder: '=',
        showHome: '=',
        showCheckout: '='
      },
      templateUrl: "distributors/distributors-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;

      vm.list = [];

      vm.$onInit = function() {
        vm.getDistributors();
      }

      vm.getDistributors = function() {
        orderService.getDist()
          .then(function(response) {
            console.log(response);
            vm.list = response.data;
          })
      }

      vm.addDist = function() {
        orderService.addDist(vm.newDist)
          .then(function(response) {
            console.log(response)
            vm.getDistributors();
            delete vm.newDist;
          })
      }

      vm.deleteDist = function(dist) {
        orderService.deleteDist(dist.id)
          .then(function(response) {
            console.log(response)
            vm.getDistributors();
          })
      }

    }
}());
