'use strict';

angular.module('notasApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/grupos', {
        templateUrl: 'app/grupos/grupos.html',
        controller: 'GruposCtrl'
      });
  });
