(function() {
  'use strict';

  angular.module('app')
    .component('root', {
      controller,
      templateUrl: "root/root-template.html"

    })

    controller.$inject = ['$state', '$http']
    function controller($state, $http) {
      const vm = this;

      vm.items = [];

      vm.$onInit = function() {

      }


    }
}());
