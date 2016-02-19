'use strict';

angular.module('notasApp')
.controller('EstudiantesCtrl', function ($scope,$http,Estudiante) {
  $('.scrollspy').scrollSpy();
  $(".button-collapse-clientes").sideNav();
  Estudiante.listar()
  .then(function(data) {
    $scope.estudiantes = data;
  })
  .catch(function(err) {
    console.log(err);
  });


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
