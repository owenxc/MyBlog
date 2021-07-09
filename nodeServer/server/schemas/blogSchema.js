// 博客管理
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema
const blogSchema = new Schema({
  blogAuthor: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  blogTitle:{
    type: String,
    required: true
  },
  date:{
    type: String,
    required: true
  },
  
})

let blogModel = mongoose.model('blog', blogSchema)
module.exports = blogModel