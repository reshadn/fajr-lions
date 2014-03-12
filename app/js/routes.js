"use strict";

angular.module('myApp.routes', ['ngRoute'])

   // configure views; the authRequired parameter is used for specifying pages
   // which should only be available while logged in
   .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
         templateUrl: 'partials/status.html',
         controller: 'StatusController'
      });

//      $routeProvider.when('/account', {
//         authRequired: true, // must authenticate before viewing this page
//         templateUrl: 'partials/account.html',
//         controller: 'AccountCtrl'
//      });

      $routeProvider.otherwise({redirectTo: '/'});
   }]);