angular.module('starter.welcome', ['ionic','firebase'])

.controller('WelcomeController', ['$scope','$location','$firebase','$firebaseArray','$firebaseAuth', function($scope,$location,$firebase,$firebaseArray,$firebaseAuth) {

		$scope.submission = function(){
				$location.path('/login');
		}
}]);
