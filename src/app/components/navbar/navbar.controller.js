'use strict';

angular.module('evertheme')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.date = new Date();

    $scope.getLoc = function() {
    	return $location.$$path;
    };
});
