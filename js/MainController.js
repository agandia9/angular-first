var app = angular.module("myApp", ["calcService"]);
app.controller("MainController", function($scope) {
	$scope.title = "Welcome CalcAPP";
	$scope.secTitle = "Calculator V. 1.0"
		//here the historial of operations...
	$scope.history = [];
})
app.controller("CalcController", function($scope, myFactory) {
	$scope.result = function(param) {
		console.log(param)
		if (param === 'op1') {
			$scope.operationRes = myFactory.methodSum($scope.firstOp, $scope.secOp);
			$scope.symbol = '+';
		} else if (param === 'op2') {
			$scope.operationRes = myFactory.methodRest($scope.firstOp, $scope.secOp);
			$scope.symbol = '-';
		} else if (param === 'op3') {
			$scope.operationRes = myFactory.methodMult($scope.firstOp, $scope.secOp);
			$scope.symbol = 'x';
		} else {
			$scope.operationRes = myFactory.methodDiv($scope.firstOp, $scope.secOp);
			$scope.symbol = '/';
		}
	}

})
