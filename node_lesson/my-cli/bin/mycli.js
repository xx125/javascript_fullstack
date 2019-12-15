#!/usr/bin/env node
// shebang #! 用于启动该文件的环境
// node app.js
// live-server
// vue init abc
// vue --version

const commander = require('commander')

commander.version('1.0.0')
// 告诉用户这样使用
.usage('<command> [项目名称]')
// 注册子命令
.command('init', 'init project')
.command('hello', 'hello')
.parse(process.argv)
// node app.js init webpack --version 后面的参数交给command解析