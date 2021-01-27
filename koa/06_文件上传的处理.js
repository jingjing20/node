const path = require('path');

const Koa = require('koa');
const Router = require('koa-router');
const multer = require('koa-multer');

const app = new Koa();
const uploadRouter = new Router({ prefix: '/upload' });

const upload = multer({
	dest: './uploads/',
	storage: storage,
});

// 给上传的文件做一些处理。文件名和后缀名、存储路径等。
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads/');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

uploadRouter.post('/avatar', upload.single('jing'), (ctx, next) => {
	console.log(ctx.req.file);
	ctx.response.body = '上传图片成功~';
});

app.use(uploadRouter.routes());

app.listen(8000, () => {
	console.log('server runing port 8000');
});
