const fs = require('fs');
const filepath = './jing.txt';
fs.open(filepath, (err, fd) => {
	console.log(fd); //jing-log

	// 通过描述符去获取文件的信息
	fs.fstat(fd, (err, info) => {
		console.log(info); //jing-log
	});
});
