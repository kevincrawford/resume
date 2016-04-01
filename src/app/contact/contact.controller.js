'use strict';

angular.module('evertheme')
  .controller('ContactCtrl', function ($scope, $firebaseArray, $http) {
	var url = 'https://crackling-inferno-6027.firebaseio.com/kcContacts';
	var ref = new Firebase(url);

	$scope.contacts = $firebaseArray(ref);

	$scope.addContact = function () {
		if (!$scope.contact.email.length) {
			return;
		}
		var newContact = {
			name: $scope.contact.name.trim(),
			email: $scope.contact.email.trim(),
			message: $scope.contact.message.trim(),
			date: Date()
		};
		$scope.contacts.$add(newContact);

		$('.et-section').toggleClass('hide');

		$http({
	    method: 'GET',
	    url: 'http://kevin-crawford.com/sendmail.php',
	    params: newContact
		}).success(function (data, status, headers, config) {
    }).error(function (data, status, header, config) {
    });

		$scope.contact.name = '';
		$scope.contact.email = '';
		$scope.contact.message = '';
	};

});
