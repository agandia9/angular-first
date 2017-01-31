angular.module('calcService', [])
	.factory('myFactory', function() {
		var history = []; 
		var calcSum = function(firstOp, secOp) {
			var total = parseInt(firstOp) + parseInt(secOp);
			var historyStr = firstOp + ' + ' + secOp + ' = ' + total;
			history.push(historyStr) 
			return Math.round(total * 100) / 100
		}
		var calcRest = function(firstOp, secOp) {
			var total2 = parseInt(firstOp) - parseInt(secOp);
			var historyStr = firstOp + ' - ' + secOp + ' = ' + total2;
			history.push(historyStr) 
			return Math.round(total2 * 100) / 100
		}
		var calcMult = function(firstOp, secOp) {
			var total3 = parseInt(firstOp) * parseInt(secOp);
			var historyStr = firstOp + ' x ' + secOp + ' = ' + total3;
			history.push(historyStr) 
			return Math.round(total3 * 100) / 100
		}
		var calcDiv = function(firstOp, secOp) {
			var total4 = parseInt(firstOp) / parseInt(secOp);
			var historyStr = firstOp + ' / ' + secOp + ' = ' + total4;
			history.push(historyStr) 
			return Math.round(total4 * 100) / 100
		}
		return {
			methodSum : calcSum,
			methodRest : calcRest,
			methodMult : calcMult,
			methodDiv : calcDiv,
			history: history
		}
	});
