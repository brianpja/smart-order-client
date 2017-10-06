(function() {
  'use strict';

  angular.module('app')
    .component('home', {
      controller,
      template: `
      <h1>and funny and good at coding</h1>
      `
    })

    controller.$inject = ['$state', '$http']
    function controller($state, $http) {
      const vm = this;

      vm.$onInit = function() {
        $http.get('http://localhost:8000/items')
          .then((response) => {
            console.log(response.data)
          })
      }
    }
}());
