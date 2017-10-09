(function() {
  'use strict';
console.log('1')
  angular.module('app')
    .component('root', {
      controller,
      templateUrl: "root-template.html"

    })

    controller.$inject = ['$state', '$http']
    function controller($state, $http) {
      const vm = this;

      vm.items = [];

      vm.$onInit = function() {
        console.log('2')
      }


    }
}());
