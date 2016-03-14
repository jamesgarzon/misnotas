'use strict';

angular.module('notasApp')
  .controller('GruposCtrl', function ($scope, Periodo) {
     
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

$scope.crearPeriodo = function (periodo) {
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
