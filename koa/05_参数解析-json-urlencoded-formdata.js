const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const multer = require('koa-multer');

const app = new Koa();

const upload = multer();

app.use(bodyParser());
app.use(upload.any());

app.use((ctx, next) => {
	console.log(ctx.request.body); // bodyParser() 解析的数据
	console.log(ctx.req.body); // multer() 解析的数据  上传文件 form-data 格式
	ctx.response.body = 'Hello World';
});

app.listen(8000, () => {
	console.log('server runing port 8000');
});
