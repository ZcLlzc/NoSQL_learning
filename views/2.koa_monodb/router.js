const Router = require("@koa/router");
const db = require("./db");
const router = new Router();

router.get("/", async (ctx) => {
  // 从数据库查询到种类的集合
  const collection = db.collection("categories");
  // 可以基于集合,进行增删改查的操作

  // 查询结果,比较特殊,是一个游标类型,可以用 forEach 遍历 / 或 toArray() 转换成数组
  const result = await collection.find();
  const arr = await result.toArray();
  ctx.body = arr;
});

router.get("/add", async (ctx) => {
  const collection = db.collection("categories");
  // 增加一条数据
  await collection.insertOne({ name: "xxxxx", createdAt: new Date() });
  // 增加多条数据
  await collection.insertMany([
    { name: "123", createdAt: new Date() },
    { name: "456", createdAt: new Date() },
  ]);
  const result = await collection.find();
  const arr = await result.toArray();
  ctx.body = arr;
});

router.get("/delete", async (ctx) => {
  const collection = db.collection("categories");
  // 删除一条数据
  // await collection.deleteOne({ name: "xxxxx" });
  // 删除多条数据
  await collection.deleteMany({ name: /\d+/ });
  const result = await collection.find();
  const arr = await result.toArray();
  ctx.body = arr;
});

router.get("/update", async (ctx) => {
  const collection = db.collection("categories");
  // 增加一条数据
  await collection.updateOne({ name: "xxxxx" }, { $set: { modify: true } });
  const result = await collection.find();
  const arr = await result.toArray();
  ctx.body = arr;
});
module.exports = router;
