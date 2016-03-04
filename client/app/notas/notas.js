'use strict';

angular.module('notasApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/asignaturas/:idAsignatura/notas', {
        templateUrl: 'app/notas/notas.html',
        controller: 'NotasCtrl'
      });
  });
