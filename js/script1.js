  var arrNames = [];
	for (var i=0; i<5; i++) {
	arrNames [i] = prompt('Ввведите имя номер' + (i+1));
	} 
  var user = prompt('Введите имя пользователя.');
  var flag = false;
	for (var i=0; i<5; i++){
	if (user == arrNames [i]) {
 flag = true;
}
}
	if (flag) {
	alert ( user + ',Вы успешно вошли.')
} else {
  alert (user + 'доступ запрещен.')
}