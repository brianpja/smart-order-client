(function() {
  'use strict';

  angular.module('app')
    .service('orderService', service)

    service.$inject = ['$http']
    function service($http) {

      // const url = 'http://localhost:8000';
      // git push heroku master
      const url = 'https://brianpja-smart-order-server.herokuapp.com';

      this.showDetail = false;

      this.postOrder = function(order) {
        return $http.post(`${url}/orders`, order)
          .then(function(response) {
            return response;
          })
      }

      this.getItems = function(obj) {

        return $http.get(`${url}/users/${obj.id}/items`)
          .then(function(response) {
            return response;
          })
      }

      this.getDist = function(obj) {
        return $http.get(`${url}/users/${obj.id}/distributors`)
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

      this.deleteDist = function(obj) {
        return $http.delete(`${url}/distributors/${obj.id}`, obj)
          .then(function(response) {
            return response;
          })
      }

      this.getDetail = function(obj) {
        return $http.get(`${url}/distributors/${obj.id}/items`)
          .then(function(response) {
            return response;
          })
      }

      this.addItem = function(item) {
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

      this.getOrders = function(obj) {
        return $http.get(`${url}/users/${obj.id}/orders`)
          .then(function(response) {
            return response;
          })
      }

      this.updateDist = function(obj) {
        return $http.patch(`${url}/distributors/${obj.id}`, obj)
          .then(function(response) {
            return response;
          })
      }

      this.createUser = function(obj) {
        return $http.post(`${url}/users`, obj)
          .then(function(response) {
            return response;
          })
      }

      this.login = function(obj) {
        return $http.post(`${url}/token`, obj)
          .then(function(response) {
            return response;
          })
      }

      this.isLoggedIn = function() {
        return $http.get(`${url}/token`)
          .then(function(response) {
            return response;
          })
      }

      this.logout = function() {
        return $http.delete(`${url}/token`)
          .then(function(response) {
            return response;
          })
      }

      this.getUserData = function(id) {
        return $http.get(`${url}/users/${id}`)
          .then(function(response) {
            return response;
          })
      }

    }
}());
