'use strict';
angular.module('notasApp')
.factory('Estudiante',function($http, $route, $q){

var servicio = {};

// Servicio para listar estudiantes
servicio.listar = function () {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/estudiantes')
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// Servicio para crear un nuevo estudiante
// parametro estudianteNuevo => objeto estudiante que se va a crear
servicio.crear = function (estudianteNuevo) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.post('/api/estudiantes', estudianteNuevo)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// Servicio para actualizar un estudiante
// parametro estudianteActualizar => objeto estudiante que se va a Actualizar
servicio.actualizar = function (estudianteActualizar) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.put('/api/estudiantes/'+estudianteActualizar._id, estudianteActualizar)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// Servicio para obtener un estudiante
// parametro _idEstudiante => ID del estudiante que se desea obtener
servicio.obtener = function (_idEstudiante) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/estudiantes/'+ _idEstudiante)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// Servicio para eliminar un estudiante
// parametro _idEstudiante => ID del estudiante que se desea eliminar
servicio.eliminar = function (_idEstudiante) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.delete('/api/estudiantes/'+ _idEstudiante)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};
// parametro periodo devuelve todos los estudiantes que estuvieron en ese periodo
servicio.obtenerEstudiantesPorPeriodo = function (periodo) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/estudiantes/obtenerEstudiantesPeriodo/'+periodo)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};


servicio.obtenerEstudiantesPorGrupo = function (grupo) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/estudiantes/obtenerEstudiantesGrupo/'+grupo)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

servicio.obtenerEstudiantesPorGrupoPeriodo = function (grupo,periodo) {
	var defered = $q.defer();
	var promise = defered.promise;
	
	$http.get('/api/estudiantes/ob/obtenerEstudiantesGrupoPeriodo/'+grupo+'/'+periodo)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

servicio.actualizarPeriodoEstudiantes = function (periodo) {
	var defered = $q.defer();
	var promise = defered.promise;
	
	$http.get('/api/estudiantes/actualizarPeriodoEstudiantes/'+periodo)
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
