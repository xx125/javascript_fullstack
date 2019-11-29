const config = {
  // 启动端口
  port: 3000,

  // 数据库的配置，用node连接mysql数据库
  database: {
    DATABASE: 'nodesql',
    USERNAME: 'root',
    PASSWORD: '123456',
    PORT: '3308',
    HOST: 'localhost'
  }
}

module.exports = config