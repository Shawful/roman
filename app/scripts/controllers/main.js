'use strict';

/**
 * @ngdoc function
 * @name romansApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the romansApp
 */
angular.module('romansApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
