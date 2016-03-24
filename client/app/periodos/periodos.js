'use strict';

angular.module('notasApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/periodos', {
        templateUrl: 'app/periodos/periodos.html',
        controller: 'PeriodosCtrl',
        authenticate: true
      });
  });
