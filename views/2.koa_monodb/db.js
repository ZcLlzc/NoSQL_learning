const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

// 创建 mongodb 客户端实例
// new MongodbClient('连接地址 用户名 密码 域名 端口 数据库名等信息')
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017");

// 建立连接
mongoClient.connect();

// 连接关联哪个数据库

const db = mongoClient.db("blog");

module.exports = db;
