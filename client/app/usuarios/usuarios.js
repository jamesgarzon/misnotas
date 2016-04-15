'use strict';

angular.module('notasApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/usuarios', {
        templateUrl: 'app/usuarios/usuarios.html',
        controller: 'UsuariosCtrl',
        authenticate: true
      });
  });
