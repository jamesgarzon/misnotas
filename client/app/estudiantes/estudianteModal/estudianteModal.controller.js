'use strict';

  angular.module('notasApp')
    .controller('EstudianteModalCtrl', function ($scope, Modal, infoModal, $modalInstance) {
    // alert(JSON.stringify(estudiante));
    $scope.estudiante = angular.copy(infoModal.estudiante);
    $scope.titulo = infoModal.titulo;
    $scope.textoBoton = infoModal.textoBoton;

      $scope.crearEstudiante = function () {
        $modalInstance.close($scope.estudiante);
      };

      $scope.actualizarEstudiante = function () {
        $modalInstance.close($scope.estudiante);
      };

      $scope.cancelar = function () {
        $modalInstance.dismiss('cancel');
      };

    });
