'use strict';

angular.module('notasApp')
  .controller('NotasCtrl', function ($scope, Estudiante, ) {

        // $scope.actividadesPorGrupo = [
        //   {_id:'56d23e1e7bcfd0ab4161436d', titulo:'ENSAYO EL PRINCIPITO', descripcion:'ENSAYO SOBRE LA OBRA DEL PRINCIPITO'},
        //   {_id:'002', titulo:'ENSAYO CIEN AÑOS DE SOLEDAD', descripcion:'ENSAYO SOBRE LA OBRA DE GABRIEL GARCÍA MARQUEZ, CIEN AÑOS DE SOLEDAD'},
        // ];
        // $scope.actividades = [
        //   ['EL PRINCIPITO',2,'-'],
        //   ['CIEN AÑOS DE SOLEDAD',5,'-']
        // ];
        $scope.listarEstudiantes = function () {
          Estudiante.listar()
          .then(function(data) {
            $scope.estudiantes = data;
            $scope.actividades = [
              {
                titulo:"El principito",
                notas:[
                  {estudiante: '1040040896', calificacion:4.1},
                  {estudiante: '1040040786', calificacion:5},
                  {estudiante: '1040040786', calificacion:5},
                  {estudiante: '1040040786', calificacion:3},
                  {estudiante: '1040040786', calificacion:2.9},
                  {estudiante: '1040040786', calificacion:2.9},
                  {estudiante: '1040040786', calificacion:2.9},
                  {estudiante: '1040040786', calificacion:3.6},
                  {estudiante: '1040040786', calificacion:5},
                  {estudiante: '1040040786', calificacion:2.5},
                  {estudiante: '1040040786', calificacion:2.6},
                  {estudiante: '1040040786', calificacion:3.4},
                  {estudiante: '1040040786', calificacion:4.5},
                  {estudiante: '1040040786', calificacion:5}
                ]
              },
              {
                titulo:"Cien años de soledad",
                notas:[
                  {estudiante: '1040040896', calificacion:2.9},
                  {estudiante: '1040040786', calificacion:5},
                  {estudiante: '1040040786', calificacion:3},
                  {estudiante: '1040040786', calificacion:3.6},
                  {estudiante: '1040040786', calificacion:2.6},
                  {estudiante: '1040040786', calificacion:2.4},
                  {estudiante: '1040040786', calificacion:4.3},
                  {estudiante: '1040040786', calificacion:3.6},
                  {estudiante: '1040040786', calificacion:5},
                  {estudiante: '1040040786', calificacion:2.5},
                  {estudiante: '1040040786', calificacion:5},
                  {estudiante: '1040040786', calificacion:5},
                  {estudiante: '1040040786', calificacion:4.2},
                  {estudiante: '1040040786', calificacion:4.5}
                ]
              }


            ];
          })
          .catch(function(err) {
            console.log(err);
          });
        };


        $scope.listarEstudiantes();

  });
