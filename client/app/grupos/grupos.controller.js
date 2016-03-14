'use strict';

angular.module('notasApp')
  .controller('GruposCtrl', function ($scope, Periodo) {
     
//creación de datos  base para areas, asignaturas y grupos por default con solo crear el periodo asi cuando se cree un estudiante solo sea seleccionar el grupo al qeu va pertenecer

$scope.grupos =[
    {nombre:"1A", 
    areas: [{
    	nombre : "Humanidades",
		 asignaturas :[
		 {
		 	 nombre :"Lengua Castellana",
		          docente : "Paula"
		 },
		{
		 	 nombre :"Ingles",
		          docente : "Carmen"
		 }
		 ]      
    }]},  {nombre:"2A", 
    areas: [{
      nombre : "Humanidades",
     asignaturas :[
     {
       nombre :"Lengua Castellana",
              docente : "Paula"
     },
    {
       nombre :"Ingles",
              docente : "Carmen"
     }
     ]      
    }]}
  ];


 
     $scope.listarPeriodos = function () {
      Periodo.listar()
      .then(function(data) {
        $scope.periodos = data;

      })
      .catch(function(err) {
        console.log(err);
      });
    };
  $scope.listarPeriodos();


$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    // $('select').material_select();
    $('.scrollspy').scrollSpy();
    $(".button-collapse-clientes").sideNav();
    $('.modal-trigger').leanModal();
  });
//función crear perido
$scope.crearPeriodo = function (periodo) {
	periodo.grupos = $scope.grupos.slice();
    Periodo.crear(periodo)
    .then(function(data) {
      $('#modal-periodo-form').closeModal();
      $scope.listarPeriodos();
      Materialize.toast('Periodo creado con éxito', 4000) // 4000 is the duration of the toast
    })
    .catch(function(err) {
      Materialize.toast('Hubo un error creando el periodo', 1000) // 4000 is the duration of the toast
      console.log(err);
    });
  }


  });
