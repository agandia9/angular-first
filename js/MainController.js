var app = angular.module("myApp", ["calcService"]);
app.controller("MainController", function($scope){
	$scope.title = "Welcome to my CalcAPP";
	$scope.secTitle = "Calculator V. 1.0"
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
	$scope.calc3 = function(){
		$scope.mult = myFactory.methodMult($scope.firstOp, $scope.secOp);
	}
	$scope.calc4 = function(){
		$scope.div = myFactory.methodDiv($scope.firstOp, $scope.secOp);
	}
})
