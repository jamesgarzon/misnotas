'use strict';

angular.module('notasApp')
.controller('GruposCtrl', function ($scope, Periodo) {

//creación de datos  base para areas, asignaturas y grupos por default con solo crear el periodo asi cuando se cree un estudiante solo sea seleccionar el grupo al qeu va pertenecer

$scope.grupos =[
{nombre:"1A", 
areas: [{
 nombre : "Humanidades",
 asignaturas :[
 {
   nombre :"Lengua Castellana",
   docente : "Paula"
 },
 {
   nombre :"Ingles",
   docente : "Carmen"
 }
 ]      
}]},  {nombre:"2A", 
areas: [{
  nombre : "Humanidades",
  asignaturas :[
  {
   nombre :"Lengua Castellana",
   docente : "Paula"
 },
 {
   nombre :"Ingles",
   docente : "Carmen"
 }
 ]      
}]}
];


 //Función para listar periodos
 $scope.listarPeriodos = function () {
  Periodo.listar()
  .then(function(data) {
    $scope.periodos = data;
  })
  .catch(function(err) {
    console.log(err);
  });
};
$scope.listarPeriodos();


$(document).ready(function(){
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    // $('select').material_select();
    $('.scrollspy').scrollSpy();
    $(".button-collapse-clientes").sideNav();
    $('.modal-trigger').leanModal();
  });

//función crear perido
$scope.crearPeriodo = function (periodo) {
	periodo.grupos = $scope.grupos.slice();
  Periodo.crear(periodo)
  .then(function(data) {
    $('#modal-periodo-form').closeModal();
    $scope.listarPeriodos();
      Materialize.toast('Periodo creado con éxito', 4000) // 4000 is the duration of the toast
    })
  .catch(function(err) {
      Materialize.toast('Hubo un error creando el periodo', 1000) // 4000 is the duration of the toast
      console.log(err);
    });
}

//Función editar periodo
$scope.editarPeriodo = function(periodo){
  Periodo.actualizar(periodo)
  .then(function (data) {

    Materialize.toast("Periodo Actualizado Correctamente", 5000);
  })
};
//Función eliminar periodo
$scope.eliminarPeriodo = function(periodo) {
  Periodo.eliminar(periodo._id)
  .then(function(data) {
        Materialize.toast('Periodo eliminado con éxito', 4000) // 4000 is the duration of the toast
        $scope.listarPeriodos();
      })
  .catch(function(err) {
        Materialize.toast('No se pudo eliminar el Periodo. '+ err , 4000) // 4000 is the duration of the toast
      });
}

});


/*
Base para todos los grupos



$scope.grupos:[
{nombre:"Parvulos", 
areas: [{
 nombre : "Dimensión Artística"
},{
 nombre : "Dimensión Socio-Afectiva"
},{
 nombre : "Dimensión Espiritual"
},{
 nombre : "Dimensión Ética"
},{
 nombre : "Dimensión Corporal"
},{
 nombre : "Dimensión Cognitiva"
},{
 nombre : "Dimensión Comunicativa"
}
]},
{nombre:"Pre-Jardín", 
areas: [{
 nombre : "Dimensión Artística"
},{
 nombre : "Dimensión Socio-Afectiva"
},{
 nombre : "Dimensión Espiritual"
},{
 nombre : "Dimensión Ética"
},{
 nombre : "Dimensión Corporal"
},{
 nombre : "Dimensión Cognitiva"
},{
 nombre : "Dimensión Comunicativa"
}
]},
{nombre:"Jardín", 
areas: [{
 nombre : "Dimensión Artística"
},{
 nombre : "Dimensión Socio-Afectiva"
},{
 nombre : "Dimensión Espiritual"
},{
 nombre : "Dimensión Ética"
},{
 nombre : "Dimensión Corporal"
},{
 nombre : "Dimensión Cognitiva"
},{
 nombre : "Dimensión Comunicativa"
}
]},
{nombre:"Transición", 
  areas: [{
   nombre : "Dimensión Artística"
  },{
   nombre : "Dimensión Socio-Afectiva"
  },{
   nombre : "Dimensión Espiritual"
  },{
   nombre : "Dimensión Ética"
  },{
   nombre : "Dimensión Corporal"
  },{
   nombre : "Dimensión Cognitiva"
  },{
   nombre : "Dimensión Comunicativa"
  },{
   nombre : "Ingles"
  },{
   nombre : "Lectores Competentes"
  }
  ]},
{nombre:"Primero", 
  areas: [{
   nombre : "CIENCIAS NATURALES Y ED. AMBIENTAL"
   asignaturas : [
          {
            nombre : "Proceso Biológico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Físico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Químico",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "CIENCIAS SOCIALES, HISTORIA, GEOGRAFIA, CONSTITUCIÓN POLÍTICA Y DEMOCRACIA"
   asignaturas : [
          {
            nombre : "Ciencias Sociales",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Educación Cívica y Democracia",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN ARTISTICA Y CULTURA"
   asignaturas : [
          
            ]
  },

  ]},{
  nombre : "EDUCACIÓN ÉTICA Y EN VALORES HUMANOS"
   asignaturas : [
          {
            nombre : "Catedra de la Paz",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN FISICA, RECREACIÓN Y DEPORTES"
   asignaturas : [
          
            ]
  },{
  nombre : "EDUCACIÓN RELOGIOSA ESCOLAR"
   asignaturas : [
         
            ]
  },{
  nombre : "HUMANIDADES, LENGUA CASTELLANA E IDIOMAS EXTRANJEROS"
   asignaturas : [
          {
            nombre :"Lengua Castellana",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Ingles",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "MATEMATICA"
   asignaturas : [
         
            ]
  },{
  nombre : "TECNOLOGIA E INFORMATICA"
   asignaturas : [
          {
            nombre : "Informática",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Tecnología",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "OPTATIVAS"
   asignaturas : [
          {
            nombre : "Lectores Competentes",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
    }
  ]
 },
{nombre:"Segundo", 
  areas: [{
   nombre : "CIENCIAS NATURALES Y ED. AMBIENTAL"
   asignaturas : [
          {
            nombre : "Proceso Biológico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Físico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Químico",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "CIENCIAS SOCIALES, HISTORIA, GEOGRAFIA, CONSTITUCIÓN POLÍTICA Y DEMOCRACIA"
   asignaturas : [
          {
            nombre : "Ciencias Sociales",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Educación Cívica y Democracia",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN ARTISTICA Y CULTURA"
   asignaturas : [
          
            ]
  },

  ]},{
  nombre : "EDUCACIÓN ÉTICA Y EN VALORES HUMANOS"
   asignaturas : [
          {
            nombre : "Catedra de la Paz",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN FISICA, RECREACIÓN Y DEPORTES"
   asignaturas : [
          
            ]
  },{
  nombre : "EDUCACIÓN RELOGIOSA ESCOLAR"
   asignaturas : [
         
            ]
  },{
  nombre : "HUMANIDADES, LENGUA CASTELLANA E IDIOMAS EXTRANJEROS"
   asignaturas : [
          {
            nombre :"Lengua Castellana",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Ingles",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "MATEMATICA"
   asignaturas : [
         
            ]
  },{
  nombre : "TECNOLOGIA E INFORMATICA"
   asignaturas : [
          {
            nombre : "Informática",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Tecnología",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "OPTATIVAS"
   asignaturas : [
          {
            nombre : "Lectores Competentes",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
    }
  ]
 },{nombre:"Tercero", 
  areas: [{
   nombre : "CIENCIAS NATURALES Y ED. AMBIENTAL"
   asignaturas : [
          {
            nombre : "Proceso Biológico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Físico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Químico",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "CIENCIAS SOCIALES, HISTORIA, GEOGRAFIA, CONSTITUCIÓN POLÍTICA Y DEMOCRACIA"
   asignaturas : [
          {
            nombre : "Ciencias Sociales",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Educación Cívica y Democracia",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN ARTISTICA Y CULTURA"
   asignaturas : [
    {
            nombre : "Dibujo",
                docente : String, // Cambiar cuando creemos la entidad
               
            }, {
            nombre : "Música",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
          
            ]
  },

  ]},{
  nombre : "EDUCACIÓN ÉTICA Y EN VALORES HUMANOS"
   asignaturas : [
          {
            nombre : "Catedra de la Paz",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN FISICA, RECREACIÓN Y DEPORTES"
   asignaturas : [
          
            ]
  },{
  nombre : "EDUCACIÓN RELOGIOSA ESCOLAR"
   asignaturas : [
         
            ]
  },{
  nombre : "HUMANIDADES, LENGUA CASTELLANA E IDIOMAS EXTRANJEROS"
   asignaturas : [
          {
            nombre :"Lengua Castellana",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Ingles",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "MATEMATICA"
   asignaturas : [
         
            ]
  },{
  nombre : "TECNOLOGIA E INFORMATICA"
   asignaturas : [
          {
            nombre : "Informática",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Tecnología",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "OPTATIVAS"
   asignaturas : [
          {
            nombre : "Lectores Competentes",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
    }
  ]
 },
 {nombre:"Cuarto", 
  areas: [{
   nombre : "CIENCIAS NATURALES Y ED. AMBIENTAL"
   asignaturas : [
          {
            nombre : "Proceso Biológico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Físico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Químico",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "CIENCIAS SOCIALES, HISTORIA, GEOGRAFIA, CONSTITUCIÓN POLÍTICA Y DEMOCRACIA"
   asignaturas : [
          {
            nombre : "Ciencias Sociales",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Educación Cívica y Democracia",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN ARTISTICA Y CULTURA"
   asignaturas : [
    {
            nombre : "Dibujo",
                docente : String, // Cambiar cuando creemos la entidad
               
            }, {
            nombre : "Música",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
          
            ]
  },

  ]},{
  nombre : "EDUCACIÓN ÉTICA Y EN VALORES HUMANOS"
   asignaturas : [
          {
            nombre : "Catedra de la Paz",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN FISICA, RECREACIÓN Y DEPORTES"
   asignaturas : [
          
            ]
  },{
  nombre : "EDUCACIÓN RELOGIOSA ESCOLAR"
   asignaturas : [
         
            ]
  },{
  nombre : "HUMANIDADES, LENGUA CASTELLANA E IDIOMAS EXTRANJEROS"
   asignaturas : [
          {
            nombre :"Lengua Castellana",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Ingles",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "MATEMATICA"
   asignaturas : [
         
            ]
  },{
  nombre : "TECNOLOGIA E INFORMATICA"
   asignaturas : [
          {
            nombre : "Informática",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Tecnología",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "OPTATIVAS"
   asignaturas : [
          {
            nombre : "Lectores Competentes",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
    }
  ]
 },
 {nombre:"Quinto", 
  areas: [{
   nombre : "CIENCIAS NATURALES Y ED. AMBIENTAL"
   asignaturas : [
          {
            nombre : "Proceso Biológico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Físico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Químico",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "CIENCIAS SOCIALES, HISTORIA, GEOGRAFIA, CONSTITUCIÓN POLÍTICA Y DEMOCRACIA"
   asignaturas : [
          {
            nombre : "Ciencias Sociales",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Educación Cívica y Democracia",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN ARTISTICA Y CULTURA"
   asignaturas : [
    {
            nombre : "Dibujo",
                docente : String, // Cambiar cuando creemos la entidad
               
            }, {
            nombre : "Música",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
          
            ]
  },

  ]},{
  nombre : "EDUCACIÓN ÉTICA Y EN VALORES HUMANOS"
   asignaturas : [
          {
            nombre : "Catedra de la Paz",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN FISICA, RECREACIÓN Y DEPORTES"
   asignaturas : [
          
            ]
  },{
  nombre : "EDUCACIÓN RELOGIOSA ESCOLAR"
   asignaturas : [
         
            ]
  },{
  nombre : "HUMANIDADES, LENGUA CASTELLANA E IDIOMAS EXTRANJEROS"
   asignaturas : [
          {
            nombre :"Lengua Castellana",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Ingles",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "MATEMATICA"
   asignaturas : [
         
            ]
  },{
  nombre : "TECNOLOGIA E INFORMATICA"
   asignaturas : [
          {
            nombre : "Informática",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Tecnología",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "OPTATIVAS"
   asignaturas : [
          {
            nombre : "Lectores Competentes",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
    }
  ]
 },{nombre:"Sexto", 
  areas: [{
   nombre : "CIENCIAS NATURALES Y ED. AMBIENTAL"
   asignaturas : [
          {
            nombre : "Proceso Biológico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Físico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Químico",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "CIENCIAS SOCIALES, HISTORIA, GEOGRAFIA, CONSTITUCIÓN POLÍTICA Y DEMOCRACIA"
   asignaturas : [
          {
            nombre : "Ciencias Sociales",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Educación Cívica y Democracia",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN ARTISTICA Y CULTURA"
   asignaturas : [
    {
            nombre : "Dibujo-Diseño",
                docente : String, // Cambiar cuando creemos la entidad
               
            }, {
            nombre : "Música",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
          
            ]
  },

  ]},{
  nombre : "EDUCACIÓN ÉTICA Y EN VALORES HUMANOS"
   asignaturas : [
          {
            nombre : "Catedra de la Paz",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN FISICA, RECREACIÓN Y DEPORTES"
   asignaturas : [
          
            ]
  },{
  nombre : "EDUCACIÓN RELOGIOSA ESCOLAR"
   asignaturas : [
         
            ]
  },{
  nombre : "HUMANIDADES, LENGUA CASTELLANA E IDIOMAS EXTRANJEROS"
   asignaturas : [
          {
            nombre :"Lengua Castellana",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Ingles",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "MATEMATICA"
   asignaturas : [
         
            ]
  },{
  nombre : "TECNOLOGIA E INFORMATICA"
   asignaturas : [
          {
            nombre : "Informática",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Tecnología",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "OPTATIVAS"
   asignaturas : [
          {
            nombre : "Lectores Competentes",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Emprendimiento",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
    }
  ]
 },{nombre:"Septimo", 
  areas: [{
   nombre : "CIENCIAS NATURALES Y ED. AMBIENTAL"
   asignaturas : [
          {
            nombre : "Proceso Biológico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Físico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Químico",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "CIENCIAS SOCIALES, HISTORIA, GEOGRAFIA, CONSTITUCIÓN POLÍTICA Y DEMOCRACIA"
   asignaturas : [
          {
            nombre : "Ciencias Sociales",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Educación Cívica y Democracia",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN ARTISTICA Y CULTURA"
   asignaturas : [
    {
            nombre : "Dibujo-Diseño",
                docente : String, // Cambiar cuando creemos la entidad
               
            }, {
            nombre : "Música",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
          
            ]
  },

  ]},{
  nombre : "EDUCACIÓN ÉTICA Y EN VALORES HUMANOS"
   asignaturas : [
          {
            nombre : "Catedra de la Paz",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN FISICA, RECREACIÓN Y DEPORTES"
   asignaturas : [
          
            ]
  },{
  nombre : "EDUCACIÓN RELOGIOSA ESCOLAR"
   asignaturas : [
         
            ]
  },{
  nombre : "HUMANIDADES, LENGUA CASTELLANA E IDIOMAS EXTRANJEROS"
   asignaturas : [
          {
            nombre :"Lengua Castellana",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Ingles",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "MATEMATICA"
   asignaturas : [
         
            ]
  },{
  nombre : "TECNOLOGIA E INFORMATICA"
   asignaturas : [
          {
            nombre : "Informática",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Tecnología",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "OPTATIVAS"
   asignaturas : [
          {
            nombre : "Lectores Competentes",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Emprendimiento",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
    }
  ]
 },{nombre:"Octavo", 
  areas: [{
   nombre : "CIENCIAS NATURALES Y ED. AMBIENTAL"
   asignaturas : [
          {
            nombre : "Proceso Biológico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Físico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Químico",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "CIENCIAS SOCIALES, HISTORIA, GEOGRAFIA, CONSTITUCIÓN POLÍTICA Y DEMOCRACIA"
   asignaturas : [
          {
            nombre : "Ciencias Sociales",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Educación Cívica y Democracia",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN ARTISTICA Y CULTURA"
   asignaturas : [
    {
            nombre : "Dibujo-Diseño",
                docente : String, // Cambiar cuando creemos la entidad
               
            }, {
            nombre : "Música",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
          
            ]
  },

  ]},{
  nombre : "EDUCACIÓN ÉTICA Y EN VALORES HUMANOS"
   asignaturas : [
          {
            nombre : "Catedra de la Paz",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN FISICA, RECREACIÓN Y DEPORTES"
   asignaturas : [
          
            ]
  },{
  nombre : "EDUCACIÓN RELOGIOSA ESCOLAR"
   asignaturas : [
         
            ]
  },{
  nombre : "HUMANIDADES, LENGUA CASTELLANA E IDIOMAS EXTRANJEROS"
   asignaturas : [
          {
            nombre :"Lengua Castellana",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Ingles",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "MATEMATICA"
   asignaturas : [
         
            ]
  },{
  nombre : "TECNOLOGIA E INFORMATICA"
   asignaturas : [
          {
            nombre : "Informática",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Tecnología",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "OPTATIVAS"
   asignaturas : [
          {
            nombre : "Lectores Competentes",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Emprendimiento",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
    }
  ]
 },{nombre:"Noveno", 
  areas: [{
   nombre : "CIENCIAS NATURALES Y ED. AMBIENTAL"
   asignaturas : [
          {
            nombre : "Proceso Biológico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Físico",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Proceso Químico",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "CIENCIAS SOCIALES, HISTORIA, GEOGRAFIA, CONSTITUCIÓN POLÍTICA Y DEMOCRACIA"
   asignaturas : [
          {
            nombre : "Ciencias Sociales",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Educación Cívica y Democracia",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN ARTISTICA Y CULTURA"
   asignaturas : [
    {
            nombre : "Dibujo-Diseño",
                docente : String, // Cambiar cuando creemos la entidad
               
            }, {
            nombre : "Música",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
          
            ]
  },

  ]},{
  nombre : "EDUCACIÓN ÉTICA Y EN VALORES HUMANOS"
   asignaturas : [
          {
            nombre : "Catedra de la Paz",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "EDUCACIÓN FISICA, RECREACIÓN Y DEPORTES"
   asignaturas : [
          
            ]
  },{
  nombre : "EDUCACIÓN RELOGIOSA ESCOLAR"
   asignaturas : [
         
            ]
  },{
  nombre : "HUMANIDADES, LENGUA CASTELLANA E IDIOMAS EXTRANJEROS"
   asignaturas : [
          {
            nombre :"Lengua Castellana",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Ingles",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "MATEMATICA"
   asignaturas : [
         
            ]
  },{
  nombre : "TECNOLOGIA E INFORMATICA"
   asignaturas : [
          {
            nombre : "Informática",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Tecnología",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "OPTATIVAS"
   asignaturas : [
          {
            nombre : "Lectores Competentes",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Emprendimiento",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
    }
  ]
 },{nombre:"Decimo", 
  areas: [{
   nombre : "CIENCIAS NATURALES Y ED. AMBIENTAL"
   asignaturas : [
          {
            nombre : "Física",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Química",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "CIENCIAS SOCIALES, HISTORIA, GEOGRAFIA, CONSTITUCIÓN POLÍTICA Y DEMOCRACIA"
   asignaturas : [
          
            
            ]
  },{
  nombre : "CIENCIAS ECONÓMICAS Y POLÍTICAS"
   asignaturas : [
          
            
            ]
  },{
  nombre : "FILOSOFIA"
   asignaturas : [
          
            
            ]
  },{
  nombre : "EDUCACIÓN ARTISTICA Y CULTURA"
   asignaturas : [
          
            ]
  },

  ]},{
  nombre : "EDUCACIÓN ÉTICA Y EN VALORES HUMANOS"
   asignaturas : [
         
            
            ]
  },{
  nombre : "EDUCACIÓN FISICA, RECREACIÓN Y DEPORTES"
   asignaturas : [
          
            ]
  },{
  nombre : "EDUCACIÓN RELOGIOSA ESCOLAR"
   asignaturas : [
         
            ]
  },{
  nombre : "HUMANIDADES, LENGUA CASTELLANA E IDIOMAS EXTRANJEROS"
   asignaturas : [
          {
            nombre :"Lengua Castellana",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Ingles",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "MATEMATICA"
   asignaturas : [
         
            ]
  },{
  nombre : "TECNOLOGIA E INFORMATICA"
   asignaturas : [
          {
            nombre : "Informática",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Tecnología",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "OPTATIVAS"
   asignaturas : [
          {
            nombre : "Lectores Competentes",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
    },{
  nombre : "DISEÑO GRAFICO"
   asignaturas : [
          {
            nombre : "Emprenderismo Empresarial",
                docente : String, // Cambiar cuando creemos la entidad
               
            },
              {
            nombre : "Herramientas Gráficas I",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
    }
  ]
 },
 {nombre:Once, 
  areas: [{
   nombre : "CIENCIAS NATURALES Y ED. AMBIENTAL"
   asignaturas : [
          {
            nombre : "Física",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Química",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "CIENCIAS SOCIALES, HISTORIA, GEOGRAFIA, CONSTITUCIÓN POLÍTICA Y DEMOCRACIA"
   asignaturas : [
          
            
            ]
  },{
  nombre : "CIENCIAS ECONÓMICAS Y POLÍTICAS"
   asignaturas : [
          
            
            ]
  },{
  nombre : "FILOSOFIA"
   asignaturas : [
          
            
            ]
  },{
  nombre : "EDUCACIÓN ARTISTICA Y CULTURA"
   asignaturas : [
          
            ]
  },

  ]},{
  nombre : "EDUCACIÓN ÉTICA Y EN VALORES HUMANOS"
   asignaturas : [
         
            
            ]
  },{
  nombre : "EDUCACIÓN FISICA, RECREACIÓN Y DEPORTES"
   asignaturas : [
          
            ]
  },{
  nombre : "EDUCACIÓN RELOGIOSA ESCOLAR"
   asignaturas : [
         
            ]
  },{
  nombre : "HUMANIDADES, LENGUA CASTELLANA E IDIOMAS EXTRANJEROS"
   asignaturas : [
          {
            nombre :"Lengua Castellana",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Ingles",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "MATEMATICA"
   asignaturas : [
         
            ]
  },{
  nombre : "TECNOLOGIA E INFORMATICA"
   asignaturas : [
          {
            nombre : "Informática",
                docente : String, // Cambiar cuando creemos la entidad
               
            },{
            nombre : "Tecnología",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
  },{
  nombre : "OPTATIVAS"
   asignaturas : [
          {
            nombre : "Lectores Competentes",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
    },{
  nombre : "DISEÑO GRAFICO"
   asignaturas : [
          {
            nombre : "Emprenderismo Empresarial",
                docente : String, // Cambiar cuando creemos la entidad
               
            },
              {
            nombre : "Herramientas Gráficas I",
                docente : String, // Cambiar cuando creemos la entidad
               
            }
            ]
    }
  ]
 }







 ]//final





*/