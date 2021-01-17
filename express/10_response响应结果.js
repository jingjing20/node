const express = require('express');

const app = express();

app.get('/jing', (req, res, next) => {
	// 方式一 麻烦
	// res.type('application/json');
	// res.end(
	// 	JSON.stringify({
	// 		name: 'jingjing',
	// 		role: 'wangzhihaodelaopo',
	// 	})
	// );

	// 方式二 简单
	// res.json({
	// 	name: 'jingjing',
	// 	role: 'wangzhihaodelaopo',
	// });
	res.json(['abc', 'cba', 'abc']);
});

// 开启监听
app.listen(8000, () => {
	console.log('服务开启成功！'); //jing-log
});
