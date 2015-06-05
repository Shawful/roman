'use strict';

/**
 * @ngdoc function
 * @name romansApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the romansApp
 */
angular.module('romansApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
