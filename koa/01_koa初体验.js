const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
	ctx.body = 'jingjing';
});

app.listen(8000, () => {
	console.log('server runing port 8000'); //jing-log
});
