## koa

-   bodyParser() 解析后的数据是放在 ctx.request.body 上面的。
-   multer() 解析后的数据是放在 ctx.req.body 上面的。

## 为什么可以直接写 ctx.body = '内容'？

-   是因为在 koa 的源码里面做了处理，把一些方法从 ctx.body 代理到了 ctx.response.body 上面。

## HTTP 状态码

-   204——无内容
-   205——重定向
