'use strict';

angular.module('notasApp')
.factory('Periodo',function($http, $route, $q){

	var servicio = {};
// Servicio para listar desempeños
servicio.listar = function () {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/periodos')
	.success(function(data) {
		defered.resolve(data);
	})
	.error(function(err) {
		defered.reject(err);
	});
	return promise;
};

// Servicio para crear un nuevo periodo

servicio.crear = function (periodoNuevo) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.post('/api/periodos', periodoNuevo)
	.success(function(data) {
		defered.resolve(data);
	})
	.error(function(err) {
		defered.reject(err);
	});
	return promise;
};

// Servicio para actualizar un periodo

servicio.actualizar = function (periodoActualizar) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.put('/api/periodos/id/'+periodoActualizar._id, periodoActualizar)
	.success(function(data) {
		defered.resolve(data);
	})
	.error(function(err) {
		defered.reject(err);
	});
	return promise;
};

// Servicio para obtener un periodo

servicio.obtenerPeriodo = function (_idPeriodo) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/periodos/'+ _idPeriodo)
	.success(function(data) {
		defered.resolve(data);
	})
	.error(function(err) {
		defered.reject(err);
	});
	return promise;
};


// Servicio para eliminar un desempeño
// parametro _idDesempeno => ID del desempeño que se desea eliminar
servicio.eliminar = function (_idPeriodo) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.delete('/api/periodos/'+ _idPeriodo)
	.success(function(data) {
		defered.resolve(data);
	})
	.error(function(err) {
		defered.reject(err);
	});
	return promise;
};

 // Servicio Actualizar el campo esUltimo de todos los periodos poniendo en false todos excepto el ultimo
 servicio.actualizarEstados = function () {
 	var defered = $q.defer();
 	var promise = defered.promise;
 	$http.put('/api/periodos/actualizarEstados')
 	.success(function(data) {
 		defered.resolve(data);
 	})
 	.error(function(err) {
 		defered.reject(err);
 	});
 	return promise;
 };

//devuelve el ultimo periodo lo devuelve como un arreglo aunque solo contenga el ultimo periodo
servicio.obtenerUltimoPeriodo = function () {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/periodos/ultimoPeriodo')
	.success(function(data) {
		defered.resolve(data);
	})
	.error(function(err) {
		defered.reject(err);
	});
	return promise;
};

return servicio;

});
