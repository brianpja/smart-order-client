(function() {
  'use strict';

  angular.module('app')
    .component('home', {
      controller,
      templateUrl: "home-template.html"

    })

    controller.$inject = ['$state', '$http']
    function controller($state, $http) {
      const vm = this;

      vm.items = [];

      vm.$onInit = function() {
        vm.getItems();
      }

      vm.getItems = function() {
        $http.get('http://localhost:8000/items')
          .then((response) => {
            console.log(response.data)
            vm.items = response.data;
          })
      }
    }
}());
