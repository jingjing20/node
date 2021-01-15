const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
	const fileWrite = fs.createWriteStream('./whynot.png', { flags: 'a+' });
	if (req.url === '/upload') {
		if (req.method === 'POST') {
			req.on('data', (data) => {
				console.log(data); //jing-log
				fileWrite.write(data);
			});
		}
		req.on('end', () => {
			console.log('文件上传成功'); //jing-log
			res.end('文件上传成功');
		});
	}
});

server.listen(8888, () => {
	console.log(`服务已成功启动在${server.address().port}`); //jing-log
});
