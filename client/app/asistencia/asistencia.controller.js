'use strict';

angular.module('notasApp')
  .controller('AsistenciaCtrl', function ($scope, Estudiante, Actividad) {
    $scope.listarEstudiantes = function () {
      Estudiante.listar()
      .then(function(data) {
        $scope.estudiantes = data;
        
      })
      .catch(function(err) {
        console.log(err);
      });
    };

    

    
    $scope.listarEstudiantes();
  });
