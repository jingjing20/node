const Router = require('koa-router');
const router = new Router({ prefix: '/users' });

router.get('/', (ctx, next) => {
	ctx.body = 'jingjing user';
});

router.get('/hao', (ctx, next) => {
	ctx.body = 'haohao user';
});

module.exports = router;
