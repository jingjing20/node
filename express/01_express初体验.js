const express = require('express');

// express 其实是一个函数，返回另一个函数。
// 返回 app
const app = express();

// 监听默认路径
app.get('/', (req, res, next) => {
	res.end('hello jingjing!');
});

// 开启监听
app.listen(8000, () => {
	console.log('服务开启成功！'); //jing-log
});
