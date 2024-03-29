var mysql = require('mysql')
var config = require('./defaultConfig')

// 创建线程池
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

// 统一连接数据库的方法
let allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      // 连接数据库的方法
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          // query是mysql线程池里自带的查询方法，不是递归
          connection.query(sql, values, (err, rows) => {
            // 如果连接数据库成功，查询失败
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            // 释放线程池
            connection.release()
          })
        }
      })
    })
  }
}

// 读取所有users表数据，测试数据连接
let getAllusers = function () {
  let _sql = `select * from users;`
  return allServices.query(_sql)
}

module.exports = {
  getAllusers
}