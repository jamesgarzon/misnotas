'use strict';

angular.module('notasApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/asistencia', {
        templateUrl: 'app/asistencia/asistencia.html',
        controller: 'AsistenciaCtrl'
      });
  });
