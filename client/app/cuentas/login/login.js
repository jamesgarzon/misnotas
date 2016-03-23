'use strict';

angular.module('notasApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/cuentas/login/login.html',
        controller: 'LoginCtrl'
      });
  });
