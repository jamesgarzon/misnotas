'use strict';
angular.module('notasApp')
.factory('Actividad',function($http, $route, $q){

var servicio = {};

// Servicio para listar actividades
servicio.listar = function () {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/actividades')
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// Servicio para crear un nuevo actividad
// parametro actividadNuevo => objeto actividad que se va a crear
servicio.crear = function (actividadNuevo) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.post('/api/actividades', actividadNuevo)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// Servicio para actualizar un actividad
// parametro actividadActualizar => objeto actividad que se va a Actualizar
servicio.actualizar = function (actividadActualizar) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.put('/api/actividades/'+actividadActualizar._id, actividadActualizar)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// Servicio para obtener un actividad
// parametro _idActividad => ID del actividad que se desea obtener
servicio.obtener = function (_idActividad) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/actividades/'+ _idActividad)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// Servicio para eliminar un actividad
// parametro _idActividad => ID del actividad que se desea eliminar
servicio.eliminar = function (_idActividad) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.delete('/api/actividades/'+ _idActividad)
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
