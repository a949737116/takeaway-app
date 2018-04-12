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
  Eslint配置教程 https://www.cnblogs.com/woniudada/p/7426114.html

8.vue文件开发中
 script标签 type="text/ecmascript-6"
 css标签   rel="stylesheet/stylus" lang="stylus"
 同时需要引入css-loader进行模板解析--save -dev

9.用vue官方的vue-cli脚手架自动生成项目后，在启动项目后，会自动打开 ‘http://localhost:8080/#/’ 地址，而且一直没法去掉“#”号。直到后来重新详细看vue-router官方文档，才发现，这是由路由的默认配置模式引起的。
解决方法是将路由配置成history模式.

10.import规则一定要先于除了@charset的其他任何CSS规则

11.vue-resource:npm i vue-resource
    /*引入资源请求插件*/
    import VueResource from 'vue-resource'
    /*使用VueResource插件*/
    Vue.use(VueResource)

12.长语句CSS标准处理语句
overflow: hidden;//超过指定的宽度和高度也隐藏
display: inline-block;//块级元素显示在这一行，不换行，其他块级元素也可以显示在这一行
white-space: nowrap; 所有的文本都显示在这一行
text-overflow: ellipsis; 多余的文本用省略号显示

13.字体图标
    font文件夹要放在assets下否则将出现CSS LOADER错误
    /assets/xxxx
    解决tff svg文件读取无效
    config文件夹下index.js(
        assetsSubDirectory: 'static',
        assetsPublicPath: '/')
    