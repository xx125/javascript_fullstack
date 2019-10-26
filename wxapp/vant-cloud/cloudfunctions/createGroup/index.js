// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = "yhl1925-fexgq"

cloud.init()
// 获取数据库句柄
const db = cloud.database({env})

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo   // 云函数接收到的参数
  return await db.collection('group').add({
    data: {
      name: event.groupName,
      createBy: userInfo.openId,
      createTime: new Date(),
      delete: false,
      updateTime: new Date()
    }
  })
  .then(res => {
    return db.collection('user-group').add({    // 指名要操作的库
      data: {
        groupId:res._id,
        userId: userInfo.openId,
        invalid: false
      }
    })   
  })
}