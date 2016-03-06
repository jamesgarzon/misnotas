'use strict';
angular.module('notasApp')
.factory('Desempeno',function($http, $route, $q){

var servicio = {};

// Servicio para listar desempeños
servicio.listar = function () {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/desempenos')
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// Servicio para crear un nuevo desempeño
// parametro desempeñoNuevo => objeto desempeño que se va a crear
servicio.crear = function (desempenosNuevo) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.post('/api/desempenos', desempenosNuevo)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// Servicio para actualizar un desempeño
// parametro desempenoActualizar => objeto desempenos que se va a Actualizar
servicio.actualizar = function (desempenosActualizar) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.put('/api/desempenos/'+desempenosActualizar._id, desempenosActualizar)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// Servicio para obtener un desempeno
// parametro _idDesempeno => ID del Desempeno que se desea obtener
servicio.obtenerDesempeno = function (_idDesempeno) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/desempenos/'+ _idDesempeno)
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
servicio.eliminar = function (_idDesempeno) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.delete('/api/desempenos/'+ _idDesempeno)
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
