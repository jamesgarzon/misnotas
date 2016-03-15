'use strict';

angular.module('notasApp')
.controller('EstudiantesCtrl', function ($scope,$http,Estudiante,Periodo,$filter) {
  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    // $('select').material_select();
    $('.scrollspy').scrollSpy();
    $(".button-collapse-clientes").sideNav();
    $('.modal-trigger').leanModal();
  });

  $scope.tipoDocumentos = [{nombre:'Cédula de cuidadanía', codigo:'CC'},{nombre:'Tarjeta de Identidad', codigo:'TI'}];
  $scope.fecha = new Date();
  $scope.vista ='ver';
  $scope.tipoDocumentos =["CC","TI","RC"];

  $scope.listarPeriodos = function () {
      Periodo.listar()
      .then(function(data) {
        $scope.periodos = data;
         $scope.grupos = $scope.periodos[3].grupos.slice();

      })
      .catch(function(err) {
        console.log(err);
      });
    };
  $scope.listarPeriodos();

  $scope.listarEstudiantes = function () {
    Estudiante.listar()
    .then(function(data) {
      $scope.estudiantes = data;
      for (var i = 0; i < $scope.estudiantes.length; i++) {
        $scope.estudiantes[i].fechaNacimiento = new Date($scope.estudiantes[i].fechaNacimiento);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  }
  $scope.listarEstudiantes();

  $scope.crearEstudiante = function (estudiante,index) {
     //estudiante.periodos[0].push($scope.periodos[3]);
   //  estudiante.periodos[0].codigo = $scope.periodos[3].codigo;
    // estudiante.periodos[0].areas = $scope.grupos[index].areas.slice();

    Estudiante.crear(estudiante)
    .then(function(data) {
      $('#modal-estudiante-form').closeModal();
      $scope.listarEstudiantes();
      Materialize.toast('Estudiante creado con éxito', 4000) // 4000 is the duration of the toast
    })
    .catch(function(err) {
      Materialize.toast('Hubo un error creando el estudiante', 1000) // 4000 is the duration of the toast
      console.log(err);
    });
  }

  $scope.actualizarEstudiante = function (estudiante) {
    Estudiante.actualizar(estudiante)
    .then(function (data) {
      Materialize.toast('Estudiante actualizado con éxito', 4000) // 4000 is the duration of the toast
      $scope.listarEstudiantes();
    })
    .catch(function (err) {
      Materialize.toast('Nooooooo'+ err , 4000) // 4000 is the duration of the toast

    });
  }


  // for (var i = 0; i < 5; i++) {
  //   console.log("entró al ciclo");
  //   var id = ""+i;
  //   var estudiante =      {
  //     "identificacion": id,
  //     "nombre": "JAMES DANILO",
  //     "apellido": "GARZON OTALVARO",
  //     "fecha_nacimiento": "2016-02-19T16:28:00.564Z",
  //     "ciudad": "MEDELLIN",
  //     "direccion": "AVENIDA SIEMPRE VIVA",
  //     "telefono": "555-555-555",
  //     "email": "james.garzon@udea.edu.co"
  //   }
  //
  //   Estudiante.crear(estudiante)
  //   .then(function(data) {
  //     // $scope.estudiantes = data;
  //   })
  //   .catch(function(err) {
  //     console.log(err);
  //   });
  // }




});
