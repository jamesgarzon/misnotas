'use strict';

angular.module('notasApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/estudiantes', {
        templateUrl: 'app/estudiantes/estudiantes.html',
        controller: 'EstudiantesCtrl',
        authenticate: true
      });
  });
