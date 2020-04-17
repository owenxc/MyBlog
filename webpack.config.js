const path = require('path');//导出 path是node内置的包 通过npm init初始化得到package.json
module.exports = { //导出入口和出口路径
  entry:'./src/main.js',//入口文件
  output: {// 动态获取路径
    path:path.resolve(__dirname, 'dist'),// resolve拼接路径 __dirname是node自带全局变量，保存现在项目的路径
    filename: 'bundle.js'
  },
  //模块：例如解读CSS,图片如何转换，压缩
  module:{
     
  },
  //插件，用于生产模版和各项功能
  plugins:[

  ],
  //配置webpack开发服务功能
  devServer:{

  }
}