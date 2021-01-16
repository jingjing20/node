const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('common middleware01');
	next();
});

// 路径匹配的中间件
app.use('/home', (req, res, next) => {
	console.log('home middleware 01');
	next();
});

// 中间插入了一个普通的中间件
app.use((req, res, next) => {
	console.log('common middleware02');
	next();
});

app.use('/home', (req, res, next) => {
	console.log('home middleware 02');
	res.end('路劲中间件！');
});

app.listen(8000, () => {
	console.log('服务开启成功！~');
});
