const fs = require('fs');

// 读取文件传统的方式;
fs.readFile('./jing.txt', (err, data) => {
	console.log(data); //jing-log
});

// 流的方式读取文件
// 创建一个 Stream
const reader = fs.createReadStream('./jing.txt', {
	start: 0,
	end: 14,
	highWaterMark: 3,
});

reader.on('data', (data) => {
	console.log(data, data.toString()); //jing-log
	reader.pause(); // 可以暂停读取文件

	setTimeout(() => {
		reader.resume(); // 继续读取文件
	}, 1000);
});

reader.on('open', () => {
	console.log('文件被打开'); //jing-log
});

reader.on('close', () => {
	console.log('文件被关闭'); //jing-log
});
