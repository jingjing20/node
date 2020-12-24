const { info } = require('console');
const fs = require('fs');

// 案例: 读取文件的信息
const filepath = './jing.txt';

// 方式一 同步读取

// const info = fs.statSync(filepath);
// console.log(info); //jing-log
// console.log("后续需要执行的代码"); //jing-log

// 方式二 异步读取

fs.stat(filepath, (err, info) => {
	if (err) {
		console.log(err); //jing-log
		return;
	}
	console.log(info); //jing-log
	console.log(info.isFile()); // 是否是文件
	console.log(info.isDirectory()); // 是否是文件夹
});
console.log('后续需要执行的代码'); //jing-log

// 方式三 Promise 期约

// fs.promises
// 	.stat(filepath)
// 	.then((info) => {
// 		console.log(info); //jing-log
// 	})
// 	.catch((err) => {
// 		console.log(err); //jing-log
// 	});
// console.log('后续需要执行的代码'); //jing-log
