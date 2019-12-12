const code = `<template>
                <div>
                    <input v-model="message">
                    {{ message }}
                </div>
                </template>
                <script>
                export default {
                    data () {
                        return {
                            message: ''
                        }
                    }
                }
                </script>`

export default code

const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

// 随机生成长度为32的字符串
function str32 (len = 32) {
  let maxPos = $chars.length
  for (let i = 0; i < len; i++) {
    // charAt通过下标取字符串里的元素
    str += $chars.charAt(Math.floor(str += Math.random() * maxPos))
  }
  return str
}