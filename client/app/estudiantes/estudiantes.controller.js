// 'use strict';
//
// angular.module('notasApp')
//   .controller('EstudiantesCtrl', function ($scope) {
//     $scope.message = 'Hello';
//   });

'use strict';

angular.module('notasApp')
.controller('EstudiantesCtrl', function ($scope,$http,Modal,estudianteService,$modal, $log) {
// .controller('EstudiantesCtrl', function ($scope,EstudianteService,$uibModal, $log) {

  $scope.currentPage = 1;
  $scope.pageSize = 3;
  $scope.estudiantes = [];
 $scope.vista='ver';
    estudianteService.listar($scope);



        //  $scope.crearEstudiante = Modal.confirm.create(function() { // callback when modal is confirmed
        //      console.log('Se creó la vuelta');
        //     });


        $scope.crearEstudiante = function () {
           var estudiante = {};
           var infoModal = {titulo:'Crear Estudiante', textoBoton:'Crear', estudiante:estudiante};

           var modalInstance = $modal.open({
             animation: true,
             templateUrl: 'estudianteGestion.html',
             controller: 'EstudianteModalCtrl',
             size: 'md',
             resolve:{
               infoModal: function () {
                 return infoModal;
               }
             }
           });

           modalInstance.result.then(function (estudianteACrear) {
             estudianteService.crear(estudianteACrear, $scope);
           }, function () {
             $log.info('Modal dismissed at: ' + new Date());
           });
         };

         $scope.cargarEstudiante = function (estudiante) {
           $scope.estudianteAMostrar = angular.copy(estudiante);
           $scope.estudianteAGestionar = angular.copy(estudiante);
         };

         $scope.eliminarEstudiante = Modal.confirm.delete(function() { // callback when modal is confirmed
           estudianteService.eliminar($scope.estudianteAGestionar._id, $scope);
            });

         $scope.cambiarVista = function (nuevaVista) {
           $scope.vista = nuevaVista;
         };




});
