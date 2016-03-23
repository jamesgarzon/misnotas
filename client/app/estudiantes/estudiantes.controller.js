'use strict';

angular.module('notasApp')
.controller('EstudiantesCtrl', function ($scope,$http,Estudiante,Periodo) {
  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    // $('select').material_select();
    $('.scrollspy').scrollSpy();
    $('.button-collapse-clientes').sideNav();
    $('.modal-trigger').leanModal();
  });


  $scope.fecha = new Date();
  $scope.vista ='ver';
  $scope.tipoDocumentos =[
    'Cédula de ciudadanía',
    'Tarjeta de identidad',
    'Registro civil'
    ];


  $scope.crearEstudiante = function (estudiante) {
    estudiante.estaMatriculado = true;
    estudiante.esEgresado = false;
    estudiante.periodos =[{codigo:''}];
    estudiante.periodos[0].codigo =  $scope.ultimoPeriodo[0].codigo;
    estudiante.perfil = 'estudiante';
    estudiante.password = estudiante.documento;

    Estudiante.crear(estudiante)
    .then(function() {
      $('#modal-estudiante-form').closeModal();
      $scope.obtenerUltimoPeriodoConEstudiantes();
      Materialize.toast('Estudiante creado con éxito', 4000);// 4000 is the duration of the toast
    })
    .catch(function(err) {
      Materialize.toast('Hubo un error creando el estudiante', 1000); // 4000 is the duration of the toast
      console.log(err);
    });

  };

  $scope.actualizarEstudiante = function (estudiante) {
    Estudiante.actualizar(estudiante)
    .then(function () {
      Materialize.toast('Estudiante actualizado con éxito', 4000); // 4000 is the duration of the toast
      $scope.obtenerUltimoPeriodoConEstudiantes();
    })
    .catch(function (err) {
      Materialize.toast('No se pudo Actualizar los datos'+ err , 4000); // 4000 is the duration of the toast

    });
  };

//cambia a un estudiante a Egresado
$scope.actualizarEstudianteEgresado = function (estudiante) {
  estudiante.esEgresado = true;
  Estudiante.actualizar(estudiante)
  .then(function () {
      Materialize.toast('Estudiante actualizado con éxito', 4000); // 4000 is the duration of the toast
      $scope.obtenerUltimoPeriodoConEstudiantes();
    })
  .catch(function (err) {
      Materialize.toast('No se pudo Actualizar los datos'+ err , 4000); // 4000 is the duration of the toast

    });
};

//Esta función lo qeu hace es que no elimina al estudiante de la base de datos si no qeu asigna su matricula en false
// lo que quiere decir que ya no estudia en el colegio pero la infomación hasta la fecha esta en la BD
$scope.eliminarEstudiante = function(estudiante) {
 estudiante.estaMatriculado = false;
 Estudiante.actualizar(estudiante)
 .then(function () {
      Materialize.toast('Estudiante Ya no esta Matriculado', 4000); // 4000 is the duration of the toast
      $scope.obtenerUltimoPeriodoConEstudiantes();
    })
 .catch(function (err) {
      Materialize.toast('No se pudo Eliminar los datos'+ err , 4000); // 4000 is the duration of the toast

    });
};

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




});
