angular.module('calcService', [])
	.factory('myFactory', function() {
		var calcSum = function(firstOp, secOp) {
			var total = parseInt(firstOp) + parseInt(secOp);
			return total
		}
		var calcRest = function(firstOp, secOp) {
			var total2 = parseInt(firstOp) - parseInt(secOp);
			return total2
		}
		return {
			methodSum : calcSum,
			methodRest : calcRest
		}
	});
