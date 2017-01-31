var app = angular.module("myApp", ["calcService"]);
app.controller("MainController", function($scope) {
	$scope.title = "Welcome CalcAPP";
	$scope.secTitle = "Calculator V. 1.0"
});
app.controller("CalcController", function($scope, myFactory) {
	$scope.history = myFactory.history;
	$scope.sum = () => {
		$scope.symbol = '+';
		$scope.operationRes = myFactory.operate("sum", $scope.firstOp, $scope.secOp);
	}
	$scope.rest = () => {
		$scope.operationRes = myFactory.operate("subs", $scope.firstOp, $scope.secOp);
		$scope.symbol = '-';
	}
	$scope.mult = () => {
		$scope.operationRes = myFactory.operate("mult", $scope.firstOp, $scope.secOp);
		$scope.symbol = 'x';
	}
	$scope.div = () => {
		$scope.operationRes = myFactory.operate("div", $scope.firstOp, $scope.secOp);
		$scope.symbol = '/';
	}
});
