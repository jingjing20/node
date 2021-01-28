const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
	// ctx.request.query
	// ctx.query

	// 设置内容
	// ctx.response.body
	// ctx.response.body = "Hello world~"
	// ctx.response.body = {
	//   name: "jingjing",
	//   age: 18,
	//   avatar_url: "https://abc.png"
	// };
	// 设置状态码
	// ctx.response.status = 400;
	// ctx.response.body = ["abc", "cba", "nba"];

	// ctx.response.body = "Hello World~";
	ctx.status = 200;
	ctx.body = 'Hello Koa~';
});

app.listen(8000, () => {
	console.log('server runing port 8000');
});
