(function() {
  'use strict';

  angular.module('app')
    .service('orderService', service)

    service.$inject = ['$http']
    function service($http) {

      const url = 'http://localhost:8000';
      // git push heroku master
      // const url = 'https://brianpja-smart-order-server.herokuapp.com';

      this.showDetail = false;

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

      this.getDist = function() {
        return $http.get(`${url}/distributors`)
          .then(function(response) {
            return response;
          })
      }

      this.addDist = function(obj) {
        return $http.post(`${url}/distributors`, obj)
          .then(function(response) {
            return response;
          })
      }

      this.deleteDist = function(id) {
        return $http.delete(`${url}/distributors/${id}`)
          .then(function(response) {
            return response;
          })
      }

      this.getDetail = function(obj) {
        console.log('getting new details')
        console.log(obj)
        return $http.get(`${url}/distributors/${obj.id}/items`)
          .then(function(response) {
            return response;
          })
      }

      this.addItem = function(item) {
        console.log('doing stuff')
        return $http.post(`${url}/items`, item)
          .then(function(response) {
            return response;
          })
      }

      this.deleteItem = function(obj) {
        return $http.delete(`${url}/items/${obj.id}`)
          .then(function(response) {
            return response;
          })
      }


    }
}());
