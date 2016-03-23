'use strict';

angular.module('notasApp')
.controller('AsistenciaCtrl', function ($scope, Estudiante) {

  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    $('.scrollspy').scrollSpy();
    $('.button-collapse-clientes').sideNav();
    $('.modal-trigger').leanModal();
  });

//Función del date picker para las fechas
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

$scope.fecha = new Date();
$scope.vista ='ver';

//función que ontiene todos los estudiantes de la base de datos
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
//Función para añadir fechas
$scope.anadirFecha = function (estudiante, fecha){

  estudiante.periodos[0].areas[0].asignaturas[0].asistencias.push(fecha);
  Estudiante.actualizar(estudiante)
  .then(function () {
    $scope.listarEstudiantes();
    Materialize.toast('Falta de Asistencia Ingresada Correctamente', 5000);
  });
};

//Función para eliminar fecha especifica
$scope.eliminarFecha = function(estudiante,index){
  estudiante.periodos[0].areas[0].asignaturas[0].asistencias.splice(index,1);

  Estudiante.actualizar(estudiante)
  .then(function () {
    Materialize.toast('Fecha Eliminada Correctamente', 5000);
  });
};

//Función para editar fecha especifica
$scope.editarFecha = function(estudiante,index,fecha){
  estudiante.periodos[0].areas[0].asignaturas[0].asistencias[index]=fecha;

  Estudiante.actualizar(estudiante)
  .then(function () {

    Materialize.toast('Fecha Actualizada Correctamente', 5000);
  });
};
});
