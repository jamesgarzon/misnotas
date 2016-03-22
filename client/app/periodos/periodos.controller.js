'use strict';
var app = angular.module('notasApp');
app.value('PeriodoActual',{ id: null
});
  app.controller('PeriodosCtrl', function ($scope, Periodo,PeriodoActual,Grupos) {
$scope.periodoActual;

$scope.grupos = Grupos.grupos.slice();

 //Función para listar periodos
 $scope.listarPeriodos = function () {
  Periodo.listar()
  .then(function(data) {
    $scope.periodos = data;
    $scope.editaPeriodo = angular.copy($scope.periodos);
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
  Periodo.actualizarEstados()
  .then(function (data) {

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
  })

  .catch(function (err) {
    Materialize.toast('Hubo un error creando el periodo', 1000) // 4000 is the duration of the toast

  });


}

//Función editar periodo
$scope.editarPeriodo = function(periodo){
  Periodo.actualizar(periodo)
  .then(function (data) {
    $scope.listarPeriodos();
    Materialize.toast("Periodo Actualizado Correctamente", 5000);
  })
};
//Función eliminar periodo
$scope.eliminarPeriodo = function(periodo) {
  Periodo.eliminar(periodo._id)
  .then(function(data) {
        Materialize.toast('Periodo eliminado con éxito', 4000) // 4000 is the duration of the toast
        $scope.listarPeriodos();
      })
  .catch(function(err) {
        Materialize.toast('No se pudo eliminar el Periodo. '+ err , 4000) // 4000 is the duration of the toast
      });
}
  });
