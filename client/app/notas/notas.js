'use strict';

angular.module('notasApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/asignaturas/:idPeriodo/:idGrupo/:idAsignatura/notas', {
        templateUrl: 'app/notas/notas.html',
        controller: 'NotasCtrl'
        // ,authenticate: true
      });
  });
