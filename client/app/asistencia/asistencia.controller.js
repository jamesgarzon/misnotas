'use strict';

angular.module('notasApp')
.controller('AsistenciaCtrl', function ($scope, Estudiante,Periodo) {

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


//Función para obtener el ultimo periodo y los estudiantes pertenecientes al ultimo periodo
$scope.obtenerUltimoPeriodoConEstudiantes = function () {

  Periodo.obtenerUltimoPeriodo().then(function(data) {
    $scope.ultimoPeriodo= data;
    Estudiante.obtenerEstudiantesPorPeriodo($scope.ultimoPeriodo[0].codigo)
    .then(function(data) {
      $scope.estudiantes = data;
      for (let i = 0; i < $scope.estudiantes.length; i++) {
        $scope.estudiantes[i].fechaNacimiento = new Date($scope.estudiantes[i].fechaNacimiento);
      }
    })
    .catch(function(err) {
      console.log(err);
    });

  })
  .catch(function(err) {
    console.log(err);
  });


};
$scope.obtenerUltimoPeriodoConEstudiantes();


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
