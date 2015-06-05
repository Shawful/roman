'use strict';

/**
 * @ngdoc overview
 * @name romansApp
 * @description
 * # romansApp
 *
 * Main module of the application.
 */
angular
  .module('romansApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'btford.socket-io'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('socket', function (socketFactory) {
    return socketFactory({
      prefix: '',
      ioSocket: io.connect('localhost:3000')
    });
  });
