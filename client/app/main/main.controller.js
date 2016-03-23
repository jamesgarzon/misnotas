'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;

  }


}

angular.module('notasApp')
  .controller('MainController', MainController);

})();
