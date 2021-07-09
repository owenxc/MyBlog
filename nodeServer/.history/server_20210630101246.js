const express = require('express');
const mongoose = require('mongoose')
const bodyParse = require('body-parser')
const app = express();

//使用bodyParse解释前端提交数据
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
// 处理/login请求
app.post('/login', function (req, res) {
    //获取登录名称和密码
    names = req.body.name;
    pwd = req.body.pwd;
    const resqData = {
        statusCode:'',
        resContent:''
    }
    if(names == 'owen' && pwd == 5110822){
       resqData.statusCode = "200";
       resqData.resContent = `${names}欢迎进入系统`
    } else{
       resqData.statusCode = "301";
       resqData.resContent = "您输入的账号和密码有误，请重新输入"
    }
    res.status(200).send(resqData);
});

//端口设置&&mongodb数据库连接
const port = process.env.PORT || 80
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})
mongoose.connect('mongodb://localhost:27017/blogs', { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Mongodb Connected'))
.catch(err => console.log(err))



// 创建api
//引入blog.js并使用接口
const blogs = require('./server/api/blog')
app.use('/api/blog',blogs)