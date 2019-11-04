## 浏览器知识：
  # 同步与异步
    console.log(1)       同步
    setTimeout(() => {   setTimeout异步
      console.log(2)
    }, 0)
    console.log(3)       同步

    ----------结果----------
    1
    3
    undefined
    2


  # setTimeout
    1.
    document.body.style.backgroundColor = 'red'
    document.body.style.backgroundColor = 'blue'

    ----------结果----------
    blue

    2.
    document.body.style.backgroundColor = 'red'
    setTimeout(() => {
      document.body.style.backgroundColor = 'blue'
    }, 1000);

    ----------结果----------
    先看到red，再看到blue

    ----------结论----------
    说明在setTimeout之前，浏览器会发生一次样式计算，并渲染它，再执行setTimeout

