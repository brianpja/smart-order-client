(function() {
  'use strict';
console.log('loading')
  angular.module('app')
    .component('home', {
      controller,
      template: `
      <h1>You are so smart and handsome and funny and good at coding</h1>
      <div ng-repeat="item in $ctrl.items">
        <div>{{item.name}}</div>
      </div>
      `
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
