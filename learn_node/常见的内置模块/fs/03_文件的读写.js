const fs = require('fs');

const filepath = './jing.txt';
const content = 'jingjinghehaohao';

// 1.文件写入
// fs.writeFile(filepath, content, { flag: 'a' }, (err) => {
// 	console.log(err); //jing-log
// });

// 2.文件读取
fs.readFile(filepath, { encoding: 'utf-8' }, (err, data) => {
	console.log(data); //jing-log
});
