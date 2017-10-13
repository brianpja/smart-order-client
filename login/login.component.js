(function() {
  'use strict';

  angular.module('app')
    .component('login', {
      controller,
      bindings: {
        currentOrder: '=',
        showHome: '=',
        showCheckout: '='
      },
      templateUrl: "login/login-template.html"

    })

    controller.$inject = ['$state', '$http', 'orderService']
    function controller($state, $http, orderService) {
      const vm = this;


      vm.$onInit = function() {

      }

      vm.login = function(user) {
        orderService.login(user)
          .then(function(response) {
            console.log(response)
          })
      }

    }
}());
