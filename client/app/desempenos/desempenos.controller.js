'use strict';

angular.module('notasApp')
  .controller('DesempenosCtrl', function ($scope,Desempenos) {
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

    $scope.tipoDesempenos ={
      "Ser",
      "Estar",
      "Hacer"
    }


  });
