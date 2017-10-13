(function() {
  'use strict';

  angular.module('app')
    .component('distributors', {
      controller,
      bindings: {
        currentOrder: '=',
        showDetail: '='
      },
      templateUrl: "distributors/distributors-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;

      vm.list = [];
      vm.detail = [];

      vm.$onInit = function() {
        vm.showDetail = false;
        vm.getDistributors();
      }

      vm.getDistributors = function() {
        orderService.getDist()
          .then(function(response) {
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
        orderService.deleteDist(dist)
          .then(function(response) {
            console.log(response)
            vm.getDistributors();
          })
      }

      vm.goDetail = function(dist){
        vm.showDetail = true;
        vm.distributor = dist;
        vm.getDetail(dist);
      }

      vm.getDetail = function(dist) {
        console.log('getting details')
        orderService.getDetail(dist)
          .then(function(response) {
            console.log(response);
            vm.detail = response.data;
          })
      }

    }
}());
