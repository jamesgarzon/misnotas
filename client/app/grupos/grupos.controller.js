'use strict';

angular.module('notasApp')
.controller('GruposCtrl', function ($scope, Periodo,PeriodoActual) {

//creación de datos  base para areas, asignaturas y grupos por default con solo crear el periodo asi cuando se cree un estudiante solo sea seleccionar el grupo al qeu va pertenecer



 //Función para obtener el ultimo periodo 
 $scope.obtenerUltimoPeriodo = function () {
 
    Periodo.obtenerUltimoPeriodo().then(function(data) {
    $scope.ultimoPeriodo= data;
  
  })
  .catch(function(err) {
    console.log(err);
  });
 
  
};
$scope.obtenerUltimoPeriodo();


$(document).ready(function(){
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    // $('select').material_select();
    $('.scrollspy').scrollSpy();
    $(".button-collapse-clientes").sideNav();
    $('.modal-trigger').leanModal();
  });



});
