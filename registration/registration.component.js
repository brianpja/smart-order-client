(function() {
  'use strict';

  angular.module('app')
    .component('regis', {
      controller,
      bindings: {
        currentOrder: '=',
        showHome: '=',
        showCheckout: '='
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
            console.log(response);
            delete vm.newUser;
          })
      }

    }
}());
