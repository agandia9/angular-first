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
		var calcMult = function(firstOp, secOp) {
			var total3 = parseInt(firstOp) * parseInt(secOp);
			return total3
		}
		var calcDiv = function(firstOp, secOp) {
			var total4 = parseInt(firstOp) / parseInt(secOp);
			return total4
		}
		return {
			methodSum : calcSum,
			methodRest : calcRest,
			methodMult : calcMult,
			methodDiv : calcDiv
		}
	});
