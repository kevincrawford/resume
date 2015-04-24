'use strict';

angular.module('evertheme')
  .controller('NavbarCtrl', function ($scope, $location, $rootScope) {
    $scope.date = new Date();

    $scope.getLoc = function() {
    	return $location.$$path;
    };

    $rootScope.$on('$stateChangeSuccess', function() {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
});
