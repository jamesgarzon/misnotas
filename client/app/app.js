'use strict';

angular.module('notasApp', [
  'notasApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angularUtils.directives.dirPagination',
  'ui.materialize'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    $(document).ready(function() {
        $('.button-collapse').sideNav();
    });
  });
