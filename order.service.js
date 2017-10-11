(function() {
  'use strict';

  angular.module('app')
    .service('orderService', service)

    service.$inject = ['$http']
    function service($http) {

      // const url = 'http://localhost:8000';
      const url = 'https://brianpja-smart-order-server.herokuapp.com';

      this.postOrder = function(order) {
        return $http.post(`${url}/orders`, order)
          .then(function(response) {
            return response;
          })
      }

      this.getItems = function() {
        return $http.get(`${url}/items`)
          .then(function(response) {
            return response;
          })
      }

    }
}());
