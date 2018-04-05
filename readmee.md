1.install vue_cli => npm i -g vue-cli 安装vue脚手架
2.vue init wepack sell 模板名 + 工程名字
3.vue 套用webpack模板工程目录文件
      sell
        |__build    webpack配置
        |__config   webpack配置
        |__node_modules 
        |__src      项目源码
            |__  commponents
            |__  assets
            |____app.vue
            |____main.js    
        |__static   第三方静态资源
        |_____.babelrc   babel编译器的配置
        |_____.editorconfig 编译器配置
        |_____.eslintignore 忽略语法检查的目录文件
        |_____.eslintrc eslint的配置文件
        |_____.gitignore
        |_____index.html 入口文件
        |_____package.json 
        |_____readme.md

4.图标字体制作
    .svg => css
    工具：IcoMoon网站
    在网站在线导入svg文件自动生成zip
    zip => style.css入口css 和font文件夹
5.开发目录设计
    src
      |__assets
      |__common
      |     |__fonts
      |     |__js
      |     |__stylus //css预处理器 跟less sass功能差不多 里面的css文件应该重名为icon.styl css语句去掉分号和括号
      |      
      |__commponents
      |     |__header
      |     |       |__header.vue
      |     |__footer
      |             |__footer.vue
      |__APP.vue
      |__main.js
6.mock数据
    data.json丢在项目根目录下
    配置build文件夹下的webpack.dev.conf.js下的express路由
    chrome插件: chrome jsonview
7.GITHUB教程 https://www.cnblogs.com/superGG1990/p/6844952.html 
