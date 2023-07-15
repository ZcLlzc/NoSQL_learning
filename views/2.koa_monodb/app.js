const Koa = require("koa");
const router = require("./router");
const app = new Koa();

app.use(router.routes());
app.listen(3001, () => console.log("启动成功!"));
