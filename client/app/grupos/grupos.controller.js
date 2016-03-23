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
//Obtiene Los estudiantes de un periodo y  de un grupo que se les envian como parametro
$scope.obtenerEstudiantesPorGrupoPeriodo = function (grupo,periodo) {
  Estudiante.obtenerEstudiantesPorGrupoPeriodo(grupo,periodo)
  .then(function(data) {
    $scope.estudiantesGrupo = data;
  })
  .catch(function(err) {
    console.log(err);
  });
  
};


$scope.agregarEstudianteGrupo=function(estudiante,grupo){
  var i = 0;

  while(true){
   if(estudiante.periodos[i].codigo=== $scope.ultimoPeriodo[0].codigo){
     estudiante.periodos[i].grupo='';
     estudiante.periodos[i].grupo = grupo.nombre;
     estudiante.periodos[i].areas=grupo.areas.slice();
     Estudiante.actualizar(estudiante)
     .then(function () {

      Materialize.toast('Estudiante Ingresado Al Grupo con éxito', 4000); // 4000 is the duration of the toast
      location.reload();
      return false;

    })
     .catch(function (err) {
      Materialize.toast('No se pudo ingresar al grupo'+ err , 4000); // 4000 is the duration of the toast

    });
     
   } else{
    i = i+1;
  }    
}
};




$(document).ready(function(){
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    // $('select').material_select();
    $('.scrollspy').scrollSpy();
    $('.button-collapse-clientes').sideNav();
    $('.modal-trigger').leanModal();
  });


});
