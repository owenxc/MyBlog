/**
 * 用户账号注册登录验证删除
 * */
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const Auths = require("../schemas/authSchema"); //用户账号库

/**
 * POST
 * api/auth/register 用户账号注册
 */
router.post("/register", (req, res) => {
  Auths.findOne({ userName: req.body.userName }).then(user => {
    if (user) {
      return res.json({ data: { code: 400, msg: "该用户名已注册!" } });
    } else {
      const NewUser = new Auths({
        userName: req.body.userName,
        password: req.body.password,
        date: Date.now().toString()
      });
      //账号密码加密
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(NewUser.password, salt, function(err, hash) {
          if (err) throw err;
          NewUser.password = hash;
          NewUser.save()
            .then(user => res.json({ data: { code: 200, msg: "注册成功" } }))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

/**
 * POST
 * api/auth/login 用户账号登录
 * 返回token, jwt passport
*/
router.post('/login', (req, res) => {
  let userName = req.body.userName,
      password = req.body.password
      Auths.findOne({userName})
      .then((user) => {
          if(!user) {
              return res.json({data:{code:404,msg:'用户账号不存在'}})
          }
          // 当前时间
          let date = new Date()
          let year = date.getFullYear()
          let month = date.getMonth() + 1
          let day = date.getDate()
          let h = date.getHours()
          let m = date.getMinutes()
          let nowDate = year + '.' + month + '.' + day + ' ' + h + ':' + m
          bcrypt.compare(password, user.password)
              .then(isMatch => {
                  if (isMatch) {
                      // jwt.sign('规则', '加密名字', '过期时间', '回调函数')
                      let rule = {
                          id: user._id,
                          userName: user.userName,
                          password: user.password,
                          date: user.date,
                          nowDate: Date.now().toString()
                      }
                      jwt.sign(rule, 'secret', {expiresIn: 60*60*24}, (err, token) => {
                          if (err) throw err
                          return res.json({data: {code: 200, msg: '登陆成功', token: 'Bearer ' + token}})
                      })
                  } else {
                      return res.json({data: {code: 400, msg:'密码错误'}})
                  }
              })
      })
})
module.exports = router;
