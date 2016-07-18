'use strict'

process.nextTick(function(){
	console.log('nextTick was callback');
});
console.log('nextTick was set');