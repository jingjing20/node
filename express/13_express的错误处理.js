const express = require('express');
const app = express();

const USERNAME_DOES_NOT_EXISTS = 'USERNAME_DOES_NOT_EXISTS';
const USERNAME_ALREADY_EXISTS = 'USERNAME_ALREADY_EXISTS';

app.post('/login', (req, res, next) => {
	// 用户名不存在
	const isLogin = false;
	if (isLogin) {
		res.json('login success!');
	} else {
		// 错误处理方式一
		// res.type(400);
		// res.json("username does not exists")

		// 错误处理方式二
		next(new Error(USERNAME_DOES_NOT_EXISTS));
	}
});

app.post('/register', (req, res, next) => {
	// 加入在数据中查询用户名时, 发现不存在
	const isExists = true;
	if (!isExists) {
		res.json('register success！');
	} else {
		// res.type(400);
		// res.json("username already exists")
		next(new Error(USERNAME_ALREADY_EXISTS));
	}
});

app.use((err, req, res, next) => {
	let status = 400;
	let message = '';
	console.log(err.message); //jing-log

	switch (err.message) {
		case USERNAME_DOES_NOT_EXISTS:
			message = 'username does not exists';
			break;
		case USERNAME_ALREADY_EXISTS:
			message = 'USERNAME_ALREADY_EXISTS';
			break;
		default:
			message = 'NOT FOUND';
	}

	res.status(status);
	res.json({
		errCode: status,
		errMessage: message,
	});
});

// 开启监听
app.listen(8000, () => {
	console.log('服务开启成功！'); //jing-log
});
