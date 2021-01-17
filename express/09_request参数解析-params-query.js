const express = require('express');

const app = express();

// params
app.get('/product/:id', (req, res, next) => {
	console.log(req.params); //jing-log
	res.end('jingjing');
});

// query
app.get('/login', (req, res, next) => {
	console.log(req.query); //jing-log
	res.end('query');
});

// 开启监听
app.listen(8000, () => {
	console.log('服务开启成功！'); //jing-log
});
