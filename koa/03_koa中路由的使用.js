const Koa = require('koa');

const userRouter = require('./router/user');

const app = new Koa();

app.use((ctx, next) => {
	// ctx.body = 'jingjing';
	next();
});

// 注册路由中间件
app.use(userRouter.routes());
// 提示更友好一点
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
	console.log('server runing port 8000'); //jing-log
});
