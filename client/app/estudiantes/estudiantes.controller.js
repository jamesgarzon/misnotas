'use strict';

angular.module('notasApp')
.controller('EstudiantesCtrl', function ($scope,$http,Estudiante) {

  $('.scrollspy').scrollSpy();
  $(".button-collapse-clientes").sideNav();
  // // $('select').material_select();
  // $('input, textarea').characterCounter();
  $('.modal-trigger').leanModal();
  // // $('.button-collapse').sideNav();
  // $('.collapsible').collapsible();
  // $('.datepicker').pickadate({
  //   selectMonths: true, // Creates a dropdown to control month
  //   selectYears: 50 // Creates a dropdown of 15 years to control year
  // });

  $scope.listarEstudiantes = function () {
    Estudiante.listar()
    .then(function(data) {
      $scope.estudiantes = data;
    })
    .catch(function(err) {
      console.log(err);
    });
  }
  $scope.listarEstudiantes();

  $scope.crearEstudiante = function (estudiante) {
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



  // for (var i = 0; i < 5000; i++) {
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
