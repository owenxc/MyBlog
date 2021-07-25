const express = require('express');
const mongoose = require('mongoose')
const bodyParse = require('body-parser')
const app = express();

//端口设置&&mongodb数据库连接
const port = process.env.PORT || 80
app.listen(port, () => {
    console.log(`server running on ${port}`)
})
mongoose.connect('mongodb://120.78.130.32:27017/community', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongodb Connected'))
    .catch(err => console.log(err))

//CORS设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//使用bodyParse解释前端提交数据
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());


// 创建api
//引入blog.js并使用接口
const blogs = require('./server/api/blog')
app.use('/api/blog', blogs)