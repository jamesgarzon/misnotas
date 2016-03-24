'use strict';

angular.module('notasApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/actividades', {
        templateUrl: 'app/actividades/actividades.html',
        controller: 'ActividadesCtrl',
        authenticate: true
      });
  });
