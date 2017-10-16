(function() {
  'use strict';

  angular.module('app')
    .component('distributors', {
      controller,
      bindings: {
        currentOrder: '=',
        showDetail: '=',
        userData: '='
      },
      templateUrl: "distributors/distributors-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;

      vm.list = [];
      vm.detail = [];

      vm.$onInit = function() {
        console.log('userData:', vm.userData)
        vm.showDetail = false;
        vm.getDistributors(vm.userData);
      }

      vm.getDistributors = function(userData) {
        console.log('getting distributors')
        orderService.getDist(userData)
          .then(function(response) {
            console.log(response)
            vm.list = response.data;
          })
      }

      vm.addDist = function() {
        vm.newDist.user_id = vm.userData.id;
        console.log(vm.newDist)
        orderService.addDist(vm.newDist)
          .then(function(response) {
            console.log(response)
            vm.getDistributors(vm.userData);
            delete vm.newDist;
          })
      }

      vm.deleteDist = function(dist) {
        orderService.deleteDist(dist)
          .then(function(response) {
            console.log(response)
            vm.getDistributors(vm.userData);
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
