// 用户账号管理
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema
const authSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password:{
      type: String,
      required:true
  },
  date:{
     type: String,
  },
  
})

let authModel = mongoose.model('auth', authSchema)
module.exports = authModel