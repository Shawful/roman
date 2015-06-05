'use strict';

/**
 * @ngdoc function
 * @name romansApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the romansApp
 */
angular.module('romansApp')
  .controller('MainCtrl', ['$scope', 'socket', '$http', function ($scope, mySocket, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // var io = require('socket.io')();

    // var socket = io.connect('http://localhost:3000');
    // console.log('connected?');

	mySocket.on('news', function(resp) {
		var body = resp.body;
		console.log("we've got news people!");
		notify(body);
	});

	// $http.get('/notifications')

}]);
