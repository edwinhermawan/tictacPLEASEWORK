'use strict';

angular.module('tictacPLEASEWORKApp')
  .controller('MainCtrl', function ($scope, angularFire) {
    
  	var ref = new Firebase("https://tictacPLEASEWORK.firebaseio.com/list");
  	$scope.items = [];

  	$scope.addItem = function() {
	    $scope.items.push($scope.newItem);
	    $scope.newItem = "";
  	}
  	
  	angularFire(ref, $scope, "items");
  });
