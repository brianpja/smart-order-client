(function() {
  'use strict';

  angular.module('app')
    .component('regis', {
      controller,
      bindings: {
        currentOrder: '=',
        showHome: '=',
        userData: '=',
        showRegis: '='
      },
      templateUrl: "registration/registration-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;


      vm.$onInit = function() {

      }

      vm.createUser = function(user) {
        orderService.createUser(user)
          .then(function(response) {
            vm.userData = response.data;
            vm.userData.loggedIn = true;
            vm.showHome = true;
            vm.showRegis = false;
            delete vm.newUser;
          })
      }

    }
}());
