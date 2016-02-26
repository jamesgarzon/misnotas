'use strict';

angular.module('notasApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/asignaturas', {
        templateUrl: 'app/asignaturas/asignaturas.html',
        controller: 'AsignaturasCtrl'
      });
  });
