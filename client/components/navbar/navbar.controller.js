'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'titulo': 'Home',
    'link': '/'
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
}];

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
  .controller('NavbarController', NavbarController);
