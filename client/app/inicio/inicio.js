'use strict';

angular.module('notasApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/inicio', {
        templateUrl: 'app/inicio/inicio.html',
        controller: 'InicioCtrl'
      });
  });
