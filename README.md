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

-   app.use(express.static('路径'))

## express VS koa

-   引入 express 返回的是一个函数。
-   引入 koa 返回的是一个类。
