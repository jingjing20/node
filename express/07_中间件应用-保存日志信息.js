const fs = require('fs');

const express = require('express');
const morgan = require('morgan');

const app = express();

const writeStream = fs.createWriteStream('./logs/jing.log', {
	flags: 'a+',
});

app.use(
	morgan('combined', {
		stream: writeStream,
	})
);

app.get('/home', (req, res, next) => {
	res.end('hello world');
});

// 开启监听
app.listen(8000, () => {
	console.log('服务开启成功！'); //jing-log
});
