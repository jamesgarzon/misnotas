'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    
  }

}

  /*login() {

  }*/

angular.module('notasApp')
  .controller('MainController', MainController);

})();
