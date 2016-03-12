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
//Función del date picker para las fechas
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  $scope.listarEstudiantes();
  $scope.fecha = new Date();
  $scope.vista ='ver';
  $scope.tipoDocumentos =[
    {indice:"CC", nombre: "Cédula de ciudadanía"},
    {indice:"TI", nombre: "Tarjeta de identidad"},
    {indice:"RC", nombre: "Registro civil"}
  ];
//Función para añadir fechas
$scope.anadirFecha = function (estudiante, fecha){
   
    estudiante.periodos[0].areas[0].asignaturas[0].asistencias.push(fecha);
    Estudiante.actualizar(estudiante)
    .then(function (data) {
      $scope.listarEstudiantes();
      Materialize.toast("Asistencia Ingresada Correctamente", 5000);
    })
};

//Función para eliminar fecha especifica
$scope.eliminarFecha = function(estudiante,index){
  estudiante.periodos[0].areas[0].asignaturas[0].asistencias.splice(index,1);

  Estudiante.actualizar(estudiante)
    .then(function (data) {
      Materialize.toast("Fecha Eliminada Correctamente", 5000);
    })
};

//Función para editar fecha especifica
$scope.editarFecha = function(estudiante,index,fecha){
  estudiante.periodos[0].areas[0].asignaturas[0].asistencias[index]=fecha;

  Estudiante.actualizar(estudiante)
    .then(function (data) {
      
      Materialize.toast("Fecha Actualizada Correctamente", 5000);
    })
};
});
