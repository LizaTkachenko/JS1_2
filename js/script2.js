
function pow(x, n) {
  var result = 1;
	for (var i = 0; i < n; i++){
	result *=x;
}
	return result;
}
  var x = prompt('x?', '');
  var n = prompt('n?', '');
	console.log( pow(x, n) );