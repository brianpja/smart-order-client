(function() {
  'use strict';

  angular.module('app')
    .component('root', {
      controller,
      templateUrl: "root/root-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;

      vm.items = [];
      vm.currentOrder = [];
      vm.userData = {
        loggedIn: false,
        id: null
      }

      vm.$onInit = function() {
        vm.showHome = true;
        vm.showCheckout = false;
        vm.showDist = false;
        vm.showOrders = false;
        vm.showDetail = false;
        vm.showLogin = false;
        vm.showRegis = false;

        vm.isLoggedIn()
          .then((response) => {
            console.log('response', response)
            if(vm.userData.loggedIn){
              vm.getUserData(vm.userData.id)
            }

            if (!vm.userData.loggedIn) {
              vm.showHome = false;
              vm.showLogin = true;
            }

          })
      }

      vm.goHome = function() {
        vm.showHome = true;
        vm.showCheckout = false;
        vm.showDist = false;
        vm.showOrders = false;
        vm.showDetail = false;
        vm.showLogin = false;
        vm.showRegis = false;
      }

      vm.goCheckout = function() {
        vm.showHome = false;
        vm.showCheckout = true;
        vm.showDist = false;
        vm.showOrders = false;
        vm.showDetail = false;
        vm.showLogin = false;
        vm.showRegis = false;
      }

      vm.goDist = function() {
        vm.showHome = false;
        vm.showCheckout = false;
        vm.showDist = true;
        vm.showOrders = false;
        vm.showDetail = false;
        vm.showLogin = false;
        vm.showRegis = false;
      }

      vm.goOrders = function() {
        vm.showHome = false;
        vm.showCheckout = false;
        vm.showDist = false;
        vm.showOrders = true;
        vm.showDetail = false;
        vm.showLogin = false;
        vm.showRegis = false;
      }

      vm.goLogin = function() {
        vm.showHome = false;
        vm.showCheckout = false;
        vm.showDist = false;
        vm.showOrders = false;
        vm.showDetail = false;
        vm.showLogin = true;
        vm.showRegis = false;
      }

      vm.goRegis = function() {
        vm.showHome = false;
        vm.showCheckout = false;
        vm.showDist = false;
        vm.showOrders = false;
        vm.showDetail = false;
        vm.showLogin = false;
        vm.showRegis = true;
      }

      vm.isLoggedIn = function() {
        return orderService.isLoggedIn()
          .then(function(response) {
            console.log('from root islogged in function response.data', response.data)
            vm.userData = response.data;
            return vm.userData;
          })
      }

      vm.logout = function() {
        orderService.logout()
          .then(function(response) {
            console.log('loggin out')
            vm.userData.loggedIn = false;
            vm.goLogin();
          })
      }

      vm.getUserData = function(id) {
        orderService.getUserData(id)
          .then(function(response) {
            console.log(response)
            vm.userData = response.data;
            vm.userData.loggedIn = true;
          })
      }

    }
}());
