(function() {
  'use strict';

  angular.module('app')
    .service('orderService', service)

    service.$inject = ['$http']
    function service($http) {

      this.currentOrder = [];

      this.addToOrder = function(item) {
        this.currentOrder.push(item);
      }

    }
}());
