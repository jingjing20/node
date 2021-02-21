const express = require('express');

const app = express();

const middleware1 = (req, res, next) => {
	req.message = 'aaa';
	next();
	console.log('one'); //jing-log
	res.end(req.message);
};

const middleware2 = (req, res, next) => {
	req.message += 'bbb';
	next();
	console.log('two'); //jing-log
};

const middleware3 = (req, res, next) => {
	req.message += 'ccc';
	console.log('three'); //jing-log
};

app.use(middleware1, middleware2, middleware3);

app.listen(8000, () => {
	console.log('服务器启动成功~');
});
