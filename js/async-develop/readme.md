# promise用.then解决回调地狱：链式调用
  回调函数：一个套一个
  promise: 一个串一个
  如果要发第三个请求，而且第三个请求需要用到第二个请求返回的数据，
  那么又需要将第三个请求写在第二个请求的callback中,我们再极端的想想，
  如果这样的情况要重复10次，20次，那样就会有10个，20个回调函数套回调
  函数这样就会出现回调地狱了。然而，Promise很好的解决了这个问题。

  - step1
      .then(res => {
        // then reeturn promise之后，后面还可以接着调用 .then
        return step2
      })
      .then(res => {
        console.log(123)
      })
    return step2 返回一个Promise对象，带有参数，可以直接在下一个then中使用