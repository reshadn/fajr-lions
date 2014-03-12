'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp',
      ['myApp.config', 'myApp.routes', 'myApp.filters', 'myApp.directives', 'myApp.controllers', 'myApp.services', 'myApp.service.firebase']
   )

   .run(['$rootScope', 'FBURL', function($rootScope, FBURL) {
      if( FBURL === 'https://INSTANCE.firebaseio.com' ) {
         // double-check that the app has been configured
         angular.element(document.body).html('<h1>Please configure app/js/config.js before running!</h1>');
         setTimeout(function() {
            angular.element(document.body).removeClass('hide');
         }, 250);
      }
      else {
         $rootScope.FBURL = FBURL;
      }
   }]);
