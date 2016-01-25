'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'link': '/'
  },
{
  'title':'Estudiantes',
  'link':'/estudiantes'
},
{
  'title':'Desempeños',
  'link':'/desempenos'
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
