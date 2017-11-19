function checkPassword(pass){
	
	if (pass == '123' || pass == 777 || pass == 333){
		alert ( 'Добро пожаловать, ' + name );
	} else if (!pass){
		alert ( 'Работа завершена' );
	} else {
		alert ( 'Пароль неверный' );
	}
}

var name  = prompt ('Введите логин', '');

if (name == 'admin' || name == 'user'){
	var pass = prompt('введите пароль', '');
	checkPassword(pass);
} else if( name == 'guest'){
	alert ( 'Добро пожаловать, Гость' );
} else if(!name){
	alert ( 'Работа завершена' );
} else {
	alert ( 'Пользователя ' + name + ' нет в системе!'  );
}