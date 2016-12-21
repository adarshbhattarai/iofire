angular.module('starter.login', ['ionic','firebase'])

.controller('LoginCtrl', ['$scope','$location','$firebase','$firebaseArray','$firebaseAuth', function($scope,$location,$firebase,$firebaseArray,$firebaseAuth) {
//ChatCtrl
  var ref = new Firebase("https://iofire-dd396.firebaseio.com");
    $scope.messages = $firebaseArray(ref.child("messages"));
    $scope.users= $firebaseAuth(ref.child("users"));

    $scope.authWithTwitter =function(){
      $scope.users.$authWithOAuthRedirect("twitter")
      .then(function(authData){
        $scope.signedInUser = authData;
      })
      .catch(function(error){
        console.log(error);
      });
    }

    $scope.submission = function(message){
      console.log(message);
      ref.push(message);
    }
}]);
