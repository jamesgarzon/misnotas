'use strict';

angular.module('notasApp')
  .controller('NavbarController', function ($scope, $location, Auth) {
    $scope.menu = [{
      'titulo': 'Home',
      'link': '/inicio'
    },
    {
      'titulo':'Estudiantes',
      'link':'/estudiantes'
    },
    {
      'titulo':'Desempeños',
      'link':'/desempenos'
    },
    {
      'titulo':'Asistencia',
      'link':'/asistencia'
    },
    {
      'titulo':'Grupos',
      'link':'/grupos'
    },
    {
      'titulo':'Asignaturas',
      'link':'/asignaturas'
    },
    {
      'titulo':'Periodos',
      'link':'/periodos'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });


/*
class NavbarController {
  //start-non-standard
  menu = [{
    'titulo': 'Home',
    'link': '/inicio'
  },
{
  'titulo':'Estudiantes',
  'link':'/estudiantes'
},
{
  'titulo':'Desempeños',
  'link':'/desempenos'
},
{
  'titulo':'Asistencia',
  'link':'/asistencia'
},
{
  'titulo':'Grupos',
  'link':'/grupos'
},
{
  'titulo':'Asignaturas',
  'link':'/asignaturas'
},
{
  'titulo':'Periodos',
  'link':'/periodos'
}
];

  isCollapsed = true;

  //end-non-standard

  constructor($location) {
    this.$location = $location;
    }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('notasApp')
  .controller('NavbarController', NavbarController);*/
