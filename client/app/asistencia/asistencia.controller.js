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

    $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    // $('select').material_select();
    $('.scrollspy').scrollSpy();
    $(".button-collapse-clientes").sideNav();
    $('.modal-trigger').leanModal();
  });

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  $scope.fecha = new Date();
  $scope.vista ='ver';
  $scope.tipoDocumentos =[
    {indice:"CC", nombre: "Cédula de ciudadanía"},
    {indice:"TI", nombre: "Tarjeta de identidad"},
    {indice:"RC", nombre: "Registro civil"}
  ]


    
    $scope.listarEstudiantes();
  });
