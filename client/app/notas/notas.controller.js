'use strict';

angular.module('notasApp')
  .controller('NotasCtrl', function ($scope,Estudiante) {

        $scope.actividadesPorGrupo = [
          {_id:'56d23e1e7bcfd0ab4161436d', titulo:'ENSAYO EL PRINCIPITO', descripcion:'ENSAYO SOBRE LA OBRA DEL PRINCIPITO'},
          {_id:'002', titulo:'ENSAYO CIEN AÑOS DE SOLEDAD', descripcion:'ENSAYO SOBRE LA OBRA DE GABRIEL GARCÍA MARQUEZ, CIEN AÑOS DE SOLEDAD'},
        ];
        // $scope.actividades = [
        //   ['EL PRINCIPITO',2,'-'],
        //   ['CIEN AÑOS DE SOLEDAD',5,'-']
        // ];
        $scope.listarEstudiantes = function () {
          Estudiante.listar()
          .then(function(data) {
            $scope.estudiantes = data;
            $scope.notasPorActividad = [];
            var actividadCalificada = false;

            for (var i = 0; i < $scope.actividadesPorGrupo.length; i++) {
              $scope.notasPorActividad.push([]);
              $scope.notasPorActividad[i].push($scope.actividadesPorGrupo[i].titulo);
              for (var j = 0; j < $scope.estudiantes.length; j++) {
                $scope.actividadesPorEstudiante = $scope.estudiantes[j].periodos[0].areas[0].asignaturas[0].actividades;
                actividadCalificada = false;
                for (var k = 0; k < $scope.actividadesPorEstudiante.length; k++) {
                  console.log($scope.actividadesPorGrupo[i]._id);
                  console.log($scope.actividadesPorEstudiante[k]._id);
                  if ($scope.actividadesPorGrupo[i]._id===$scope.actividadesPorEstudiante[k]._id) {
                    $scope.notasPorActividad[i].push($scope.actividadesPorEstudiante[k].nota);
                    actividadCalificada = true;
                  }
                }
                    if (!actividadCalificada) {
                      $scope.notasPorActividad[i].push('-');
                    }
              }
            }



          })
          .catch(function(err) {
            console.log(err);
          });
        };


        $scope.listarEstudiantes();

  });
