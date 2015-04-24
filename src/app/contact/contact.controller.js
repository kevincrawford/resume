'use strict';

angular.module('evertheme')
  .controller('ContactCtrl', function ($scope, $firebaseArray) {
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

		$scope.contact.name = '';
		$scope.contact.email = '';
		$scope.contact.message = '';
	};

  });
