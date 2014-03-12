(function() {
   'use strict';

   /* Services */

   angular.module('myApp.services', ['myApp.service.firebase'])

        // put your services here!
        // .service('serviceName', ['dependency', function(dependency) {}]);

    .factory('fajrLionsService', ['$q', '$firebase', function($q, $firebase) {
        var d = new Date(),
            currDate = d.toDateString(),
            fajrLionsRef = new Firebase('https://fajr-lions.firebaseio.com/');

        fajrLionsRef.once('value', function(snapshot){
            if(!snapshot.hasChild(currDate)){
                fajrLionsRef.child(currDate).set({fajr: {count: 0}});
            }
        });

        return {
            getCount: function(){
                var d = $q.defer();

                fajrLionsRef.once('value', function(snapshot){
                    if(!snapshot.hasChild(currDate)){
                        fajrLionsRef.child(currDate).set({fajr: {count: 0}});
                        d.resolve(0);
                    } else {
                        d.resolve(snapshot.child(currDate + '/fajr/count').val());
                    }
                });

                return d.promise;
            },
            updateCount: function(val){
                fajrLionsRef.child(currDate + '/fajr').update({count: val});
            }
        }
    }]);



})();

