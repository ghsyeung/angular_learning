'use strict';

angular.module('perkedProtoAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/gl', {
        templateUrl: 'views/gratitude_list.html',
        controller: 'GratitudeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
