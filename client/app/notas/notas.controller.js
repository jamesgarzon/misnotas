'use strict';

angular.module('notasApp')
  .controller('NotasCtrl', function ($scope, Estudiante, Desempeno, Actividad, $routeParams) {
    $('.modal-trigger').leanModal();

    $scope.periodo =  $routeParams.idPeriodo;
    $scope.grupo =  $routeParams.idGrupo;
    $scope.asignatura =  $routeParams.idAsignatura;

        $scope.listarActividades = function () {
          Actividad.listarPorGrupo($scope.periodo,$scope.asignatura,$scope.grupo)
          .then(function (data) {
            $scope.estudiantes = data.estudiantes;
            $scope.actividades = data.actividades;
          })
          .catch(function (err) {
            Materialize.toast(err, 4000);

          });
        }

        $scope.listarDesempenos = function () {
          Desempeno.listar()
          .then(function(data){
            $scope.desempenos = data;
          })
          .catch(function(err){
            Materialize.toast('Problemas obteniendo los desemepeños', 4000);
          });
        }
// asignaturas/:idPeriodo/:idGrupo/:idAsignatura/notas
        $scope.crearActividad = function (actividad) {
          actividad.periodo =  $scope.periodo;
          actividad.grupo =  $scope.grupo;
          actividad.asignatura =  $scope.asignatura;
            Actividad.crearActividadAlGrupo(actividad)
            .then(function(data){
              Materialize.toast('Actividad creada exitosamente', 4000);
              // $scope.listarEstudiantes();
            })
            .catch(function (err) {
              Materialize.toast('ERROR CREANDO LA ACTIVIDAD', 4000);
            })
        }



        $scope.listarDesempenos();

        $scope.listarActividades();

  });

        // $scope.listarEstudiantes = function () {
        //   Estudiante.listar()
        //   .then(function(data) {
        //     $scope.estudiantes = data;
        //     $scope.actividades = [
        //       {
        //         titulo:"El principito",
        //         notas:[
        //           {estudiante: '1040040896', calificacion:4.1},
        //           {estudiante: '1040040786', calificacion:5}
        //           // {estudiante: '1040040786', calificacion:5},
        //           // {estudiante: '1040040786', calificacion:3},
        //           // {estudiante: '1040040786', calificacion:2.9},
        //           // {estudiante: '1040040786', calificacion:2.9},
        //           // {estudiante: '1040040786', calificacion:2.9},
        //           // {estudiante: '1040040786', calificacion:3.6},
        //           // {estudiante: '1040040786', calificacion:5},
        //           // {estudiante: '1040040786', calificacion:2.5},
        //           // {estudiante: '1040040786', calificacion:2.6},
        //           // {estudiante: '1040040786', calificacion:3.4},
        //           // {estudiante: '1040040786', calificacion:4.5},
        //           // {estudiante: '1040040786', calificacion:5}
        //         ]
        //       },
        //       {
        //         titulo:"Cien años de soledad",
        //         notas:[
        //           {estudiante: '1040040896', calificacion:2.9},
        //           {estudiante: '1040040786', calificacion:5}
        //           // {estudiante: '1040040786', calificacion:3},
        //           // {estudiante: '1040040786', calificacion:3.6},
        //           // {estudiante: '1040040786', calificacion:2.6},
        //           // {estudiante: '1040040786', calificacion:2.4},
        //           // {estudiante: '1040040786', calificacion:4.3},
        //           // {estudiante: '1040040786', calificacion:3.6},
        //           // {estudiante: '1040040786', calificacion:5},
        //           // {estudiante: '1040040786', calificacion:2.5},
        //           // {estudiante: '1040040786', calificacion:5},
        //           // {estudiante: '1040040786', calificacion:5},
        //           // {estudiante: '1040040786', calificacion:4.2},
        //           // {estudiante: '1040040786', calificacion:4.5}
        //         ]
        //       }
        //
        //
        //     ];
        //   })
        //   .catch(function(err) {
        //     console.log(err);
        //   });
        // };
