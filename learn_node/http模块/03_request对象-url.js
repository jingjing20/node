const http = require('http');
const url = require('url');
const qs = require('querystring');

// 创建一个web服务器
const server = http.createServer((req, res) => {
	// url的使用
	// if (req.url === '/login') {
	// 	res.end('登录成功！欢迎欢迎');
	// } else if (req.url === '/users') {
	// 	res.end('用户中心');
	// } else {
	// 	res.end('错误请求！');
	// }

	// /login?username=jing&password=123
	const { pathname, query } = url.parse(req.url);
	if (pathname === '/login') {
		console.log(typeof query); //jing-log  string
		console.log(typeof qs.parse(query)); //jing-log  object
		const { username, password } = qs.parse(query);
		console.log(username, password);
		res.end('请求参数~');
	}
});

server.listen('8888', () => {
	console.log('服务启动成功'); //jing-log
});
