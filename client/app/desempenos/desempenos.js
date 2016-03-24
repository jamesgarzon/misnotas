'use strict';

angular.module('notasApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/desempenos', {
        templateUrl: 'app/desempenos/desempenos.html',
        controller: 'DesempenosCtrl',
        authenticate: true
      });
  });
