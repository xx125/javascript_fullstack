# npm i webpack webpack-cli --save-dev
# npm i lodash --save-dev

# dist：存放打包之后的文件

# src：存放入口文件

# webpack.config.js：webpack的配置文件

webpack中的module用来决定如何处理项目中的不同类型

webpack模块支持语句：
- es6 import语句
- Commonjs require()语句
- AMD define和require语句 --save
- css/sass/less文件中的@import语句
- 样式(url(...))或者html文件(<img src="...">)中的图片链接


# npm install style-loader css-loader --save-dev
# npm i sass-loader node-sass --save-dev

# npm i postcss-loader autoprefixer --save-dev 给css加前缀
  autoprefixer进行浏览器的部分兼容补全

# npm i mini-css-extract-plugin --save-dev
