'use strict';

angular.module('notasApp')
  .controller('DesempenosCtrl', function ($scope, Modal) {
    $scope.message = 'Hello';

    $scope.listadesempenos = [
      {
        'id': 1,
        'nombre': 'Azurite',
        'descripcion': 'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
        'materia': 'Español',
        'autor': [{
          'nombre': 'Catalina Osorno',
          'role': 'Profesor',
          'identificacion': 4680160165
        }],
        'fechaCreacion': 1397490980837,
        'ultimaModificacion': 1397490980837
      },
      {
        'id': 2,
        'nombre': 'Bloodstone',
        'descripcion': 'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
        'materia': 'Matemáticas',
        'autor': [{
          'nombre': 'Catalina Osorno',
          'role': 'Profesor',
          'identificacion': 4680160165
        }],
        'fechaCreacion': 1397490980837,
        'ultimaModificacion': 1397490980837
      },
      {
        'id': 3,
        'nombre': 'Ser',
        'descripcion': 'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
        'materia': 'Matemáticas',
        'autor': [{
          'nombre': 'Catalina Osorno',
          'role': 'Profesor',
          'identificacion': 4680160165
        }],
        'fechaCreacion': 1397490980837,
        'ultimaModificacion': 1397490980837
      }
    ];


        $scope.vista = 1;

        $scope.setVista = function(nuevoValor){
          $scope.vista  = nuevoValor;
        };

        $scope.estaSeleccionada = function(vistaSeleccionada){
          $scope.vista = vistaSeleccionada;
        };

        $scope.crear = Modal.confirm.create(function() {
          console.log('se creo exitosamente');
          Modal.info.create();
          Modal.info.default('titulo de prueba', 'Contenido de prueba');
         });


  });
