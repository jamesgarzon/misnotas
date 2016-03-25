'use strict';

angular.module('notasApp')
  .controller('MainController', function ($scope, $http, Auth) {
    $scope.nuevo = [];
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
