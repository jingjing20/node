const app = require('./app/index');
const config = require('./app/config');

app.listen(3000, () => {
	console.log(`服务器在${config.APP_PORT}端口启动成功~`);
});
