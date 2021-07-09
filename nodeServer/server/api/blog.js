// 博客增删改查
const express = require('express')
const router = express.Router()
const Blogs = require('../schemas/blogSchema') //博客库

// 博客 POST请求
// api/blog/insertblog
router.post('/insertblog', (req, res) => {
    const NewBlog = new Blogs({
        blogAuthor: req.body.blogAuthor,
        content: req.body.content,
        blogTitle:req.body.blogTitle,
        date:req.body.date
    })
    NewBlog.save()
        .then((blog) => res.json({ data: { code: 200, msg: '新增成功', blog } }))
        .catch(err => console.log(err))
})

//api/blog/getBlogs
router.post('/getBlogs', (req, res) => {
    let currentPage = req.body.currentPage
    let pageSize = req.body.pageSize
    let blogAuthor = req.body.blogAuthor
    Blogs.countDocuments({ blogAuthor }, (err, count) => {
        if (err) { 
            res.json({ data: { code: 400, msg: `${JSON.stringify(err)}` } }) 
        }else {
            Blogs.find({ blogAuthor }).skip((currentPage - 1) * pageSize).limit(pageSize)
                .then(blog => {
                    res.json({
                        data: {
                            code: 200,
                            blog,
                            totalCount: count
                        }
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    })
})
//api/blog/deleteBlogs

router.post('/deleteBlogs', (req, res) => {
    Blogs.deleteOne({ _id: req.body.id})
      .then((com) => {
        res.json({data:{
            code:200,
            msg: '删除成功'
        }})
      })
      .catch(err => {console.log('错误saber',err)})
  })

module.exports = router