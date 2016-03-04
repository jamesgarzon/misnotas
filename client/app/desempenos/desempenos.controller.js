'use strict';

angular.module('notasApp')
  .controller('DesempenosCtrl', function ($scope,Desempeno) {
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
      // $('select').material_select();
      //$('.scrollspy').scrollSpy();
      //$(".button-collapse-clientes").sideNav();
      $('.modal-trigger').leanModal();
    });
    //$scope.message = 'Hello';

    $scope.tipoDesempenos =[
      "Ser",
      "Estar",
      "Hacer"
    ];

    $scope.listarDesempenos = function () {
      Desempeno.listar()
      .then(function(data) {
            $scope.desempenos = data;
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    $scope.crearDesempeno = function (desempeno) {
      Desempeno.crear(desempeno)
      .then(function(data) {
        $('#modal-desempeno-form').closeModal();
        $scope.listarDesempenos();
        Materialize.toast('Desempeño creado con éxito', 4000) // 4000 is the duration of the toast
      })
      .catch(function(err) {
        Materialize.toast('Hubo un error creando el Desempeño', 1000) // 4000 is the duration of the toast
        console.log(err);
      });
    }

    $scope.listarDesempenos();
  });
