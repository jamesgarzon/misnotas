// 'use strict';
//
// angular.module('notasApp')
//   .service('estudiante', function () {
//     // AngularJS will instantiate a singleton by calling "new" on this function
//
//   });


'use strict';
angular.module('notasApp')
.factory('estudianteService',function($http, $route, Modal){
	var servicio = {};

	servicio.listar = function(scope){

		var $promise = $http.get('/api/estudiantes');
		$promise.then(function(msg){
			scope.estudiantes = msg.data;
			// for (var i = 0; i < scope.estudiantes.length; i++) {
			// 	scope.estudiantes[i].fecha_nacimiento = new Date();
			// 	console.log(scope.estudiantes[i].fecha_nacimiento);
			// }
			// console.log(JSON.stringify(scope.estudiantes[0]));
		});
	};

	servicio.crear = function(estudianteACrear, scope){
		var data = estudianteACrear;
		data = JSON.stringify(data);
		var $promise = $http.post('/api/estudiantes/',data);
		$promise.then(function(msg){
					console.log(msg.data);
					Modal.info.create('el estudiante');
					// scope.mostrarMensajeModal("Creación exitosa","El estudiante ha sido creado exitosamente");
					servicio.listar(scope);
		});
	};

	servicio.actualizar = function(estudianteAActualizar, scope){
		var $promise = $http.put('/api/estudiantes/'+estudianteAActualizar._id, estudianteAActualizar);
		$promise.then(function(msg){
					console.log('data: '+msg.data);
					servicio.listar(scope);
					// scope.mostrarMensajeModal("Actualización exitosa","El estudiante ha sido actualizado exitosamente");
		});
	};

	servicio.eliminar = function(estudianteAEliminar, scope){
		var $promise = $http.delete('/api/estudiantes/'+estudianteAEliminar);
		$promise.then(function(msg){
					console.log('data: '+msg.data);
					Modal.info.delete('el estudiante');
					servicio.listar(scope);
					// scope.mostrarMensajeModal("Eliminación exitosa","El estudiante ha sido eliminado exitosamente");
		});
	};

	return servicio;
});
