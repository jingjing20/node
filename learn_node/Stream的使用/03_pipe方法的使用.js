const fs = require('fs');

// 传统的写法
// fs.readFile('./jing.txt', (err, data) => {
// 	fs.writeFile('./hao.txt', data, (err) => {
// 		console.log(err); //jing-log
// 	});
// });

// Stream 流的写法
fs.createReadStream('./jing.txt').pipe(fs.createWriteStream('./jinghao.txt'));
