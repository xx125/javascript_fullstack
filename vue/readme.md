# Vue八大生命周期函数
  created() {},       页面初始化
  beforeCreate() {},
  mounted() {},       代码已经被编译成功，成为html和css
  beforeMount() {},
  updated() {},       数据更新之后
  beforeUpdate() {},
  destroyed() {},     页面销毁
  beforeDestroy() {}


------------------------------------------------------------------------------------------

## Vue属性

  # methods属性
    是属性：{}，页面上所有方法都放在里面
    生命周期是函数：() {}

  # computed属性
    用来监控自己定义的变量，改变了之后可以直接传到页面里引用
    定义一个方法，return要把数据操作成什么样，最后把该数据再拿到页面上去展示
    方法名(num)相当于数据源里的数据(count)

  # watch属性
    检测某个数据发生变化，根据改变化进行一些怎么样的操作
    直接监听数据源里的数据，例如：temperature: function(newVal, oldVal) {}  
    newVal, oldVal显示新值和旧值的两个参数

  # extends属性
    将并不属于代码当中的对象扩展到Vue代码中来
    当前页面代码过多是可把html和js分开写，再扩展进来
    注意：Methods里面的方法扩展进来是没有用的

  # delimiters属性
    将你挖的坑的格式改掉，例如：{{}} => ${}


------------------------------------------------------------------------------------------

## Vue指令

  # v-model
    获取用户在input框里输入的值

  # v-if / v-else
    两个dom结构二选一出现，只展示一个dom结构；类似 wx:if / wx:else

  # v-show
    展示dom结构，如果是false，依旧有dom结构，只是display为none
    页面频繁切换是否展示时适合用v-show，可使网页不用重新加载dom结构

  # v-for  :key
    循环输出，可自定义变量名字

  # v-html
    可以解析含有或不含有html标签的内容，v-html能不用就不用，使用了容易招到xss攻击

  # v-text
    直接输出内容

  # v-on
    绑定事件的指令，可以绑定很多时间，类似addEventListener，例如 :click(点击事件)可简写成 @click

  # v-bind
    绑定属性
    :class(添加类名)可简写成 :class
    :class="{good:className}" 可手动添加自己自己想加的类名(good)，但是取决于className是否为true
    :class="[classA, classB, ... ]" 数组批量加类名
  

  