var app = angular.module("myApp", ["calcService"]);
app.controller("MainController", function($scope){
	$scope.title = "Welcome to my app";
	$scope.secTitle = "Calculator V 0.1"
	//here the historial of operations...
	$scope.history = [];
})
app.controller("CalcController", function($scope, myFactory){
	$scope.calc1 = function(){
		$scope.sum = myFactory.methodSum($scope.firstOp, $scope.secOp);
	}
	$scope.calc2 = function(){
		$scope.rest = myFactory.methodRest($scope.firstOp, $scope.secOp);
	}
})
