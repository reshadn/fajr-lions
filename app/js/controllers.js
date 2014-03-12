'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
    controller('StatusController', ['$scope', 'fajrLionsService', function ($scope, fajrLionsService) {
        $scope.date = Date.now();

        var promise = fajrLionsService.getCount();

        promise.then(function(result){
            $scope.count = result;
        })

        $scope.update = function () {
            $scope.count++;
            fajrLionsService.updateCount($scope.count);
            $scope.isUserUpdated = true;
        };

    }]);