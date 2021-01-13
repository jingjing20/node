const http = require('http');

// 创建一个web服务器
const server = http.createServer((req, res) => {
	// request对象中封装了客户端给我们服务器传递过来的所有信息
	console.log(req.url);
	console.log(req.method);
	console.log(req.headers);

	res.end('Hello Server');
});

server.listen(8888, () => {
	console.log('服务器启动成功~');
});
