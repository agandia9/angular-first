angular.module('calcService', [])
	.factory('myFactory', function() {
		var history = []; 
		const ops = {
			sum: (a,b) => a+b,
			subs: (a,b) => a-b,
			mult: (a,b) => a*b,
			div: (a,b) => a/b
		}
		const symbols = {
			sum: '+',
			subs: '-',
			mult: 'x',
			div: '/'
		}
		function operate(op, x, y) {
			const result = Math.round(ops[op](x,y) * 100) / 100;
			const str = x + ' ' + symbols[op] + ' ' + y + ' = ' + result;
			history.push(str)
			return result;
		} 
		return {
			operate : operate,
			history: history
		}
	});

// myFactory.operate("mult",3,5)