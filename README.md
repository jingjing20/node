# node

系统学习 node

## express 中间件应用

-   multer 库解析 form-data 请求方式的数据

-   morgan 库提供日志打印功能

## next()函数

-   next() 一般不含参数代表执行下一个中间件
-   如果 next() 里面有参数 代表的就是往下传的错误信息。

## router 本质也是一个小型 app

## 启用静态服务器

-   express

```js
const express = require('express');

const app = express();

app.use(express.static('./dist'));

app.listen(8000, () => {
	console.log('路由服务器启动成功~');
});
```

-   koa

```js
const Koa = require('koa');
const staticAssets = require('koa-static');

const app = new Koa();

app.use(staticAssets('./dist'));

app.listen(8000, () => {
	console.log('server runing port 8000');
});
```

## express VS koa

-   1、引入 express 返回的是一个函数。而引入 koa 返回的是一个类。

-   2、express 中间件的返回的只是普通的同步函数。而 koa 的中间件返回的是 promise 函数。
