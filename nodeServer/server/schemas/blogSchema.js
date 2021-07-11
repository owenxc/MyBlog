// 博客管理
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema
const blogSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  articleTitle:{
    type: String,
    required: true
  },
  articleType:{
    type: String,
    required: true
  },
  releaseType:{
    type: String,
    required: true
  },
  articleProfile:{
    type: String,
    required: true
  },
  tags:[],
  date:{
     type: String,
  },
  
})

let blogModel = mongoose.model('blog', blogSchema)
module.exports = blogModel