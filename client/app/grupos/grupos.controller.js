'use strict';

angular.module('notasApp')
.controller('GruposCtrl', function ($scope, Periodo,PeriodoActual,Estudiante) {

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
$scope.obtenerEstudiantesGrupo = function (grupo) {
  Estudiante.obtenerEstudiantesPorGrupo(grupo)
    .then(function(data) {
      $scope.estudiantesGrupo = data;
    })
    .catch(function(err) {
      console.log(err);
    });
/*    $scope.resultado =[];
var i = 0;
var j = 0;
    while(i < $scope.estudiantes.length && j < $scope.estudiantesGrupo.length ){
      if ($scope.estudiantes[i] = $scope.estudiantesGrupo[j]) {
        $scope.resultado.push($scope.estudiantes[i]);
        i = i+1;

      }else{
        j = j+1;

      }

    }*/
  
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
/*opcionpara ingresar a un estudiante a un grupo 
 $scope.matricularEstudiante=function(estudiante){
    

 };*/

});
