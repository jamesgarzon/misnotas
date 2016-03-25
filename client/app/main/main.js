'use strict';

angular.module('notasApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/inicio', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        // controllerAs: 'main',
        authenticate: true
      });
  });
