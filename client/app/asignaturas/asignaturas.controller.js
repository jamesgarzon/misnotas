'use strict';

angular.module('notasApp')
  .controller('AsignaturasCtrl', function ($scope, Estudiante, Actividad) {

    $scope.listarEstudiantes = function () {
      Estudiante.listar()
      .then(function(data) {
        $scope.estudiantes = data;
        // for (var i = 0; i < $scope.estudiantes.length; i++) {
        //   $scope.estudiantes[i].fecha_nacimiento = $filter('date')($scope.estudiantes[i].fecha_nacimiento, "yyyy-MM-dd");
        // }
      })
      .catch(function(err) {
        console.log(err);
      });
    };

    $scope.listarActividades = function () {
      Actividad.listar()
      .then(function(data) {
        $scope.actividades = data;
        // for (var i = 0; i < $scope.estudiantes.length; i++) {
        //   $scope.estudiantes[i].fecha_nacimiento = $filter('date')($scope.estudiantes[i].fecha_nacimiento, "yyyy-MM-dd");
        // }
      })
      .catch(function(err) {
        console.log(err);
      });
    };

    $scope.listarActividades();
    $scope.listarEstudiantes();


  });
