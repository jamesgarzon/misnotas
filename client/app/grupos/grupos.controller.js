'use strict';

angular.module('notasApp')
.controller('GruposCtrl', function ($scope, Periodo,Estudiante) {


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

//obtiene los estudiantes de un periodo en esta vista los estudiantes del ultimo periodo
$scope.obtenerEstudiantes = function (codigo) {
  Estudiante.obtenerEstudiantesPorPeriodo(codigo)
  .then(function(data) {
    $scope.estudiantes = data;
  })
  .catch(function(err) {
    console.log(err);
  });

};
//Obtiene Los estudiantes de un grupo que se le envia como parametro
$scope.obtenerEstudiantesGrupo = function (grupo) {
  Estudiante.obtenerEstudiantesPorGrupo(grupo)
  .then(function(data) {
    $scope.estudiantesGrupo = data;
  })
  .catch(function(err) {
    console.log(err);
  });
  
};

/*opcionpara ingresar a un estudiante a un grupo 
 $scope.matricularEstudiante=function(estudiante){
    

 };*/




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
