## float带来的问题
  影响父容器高度，造成父容器高度塌陷，从而使父容器脱离文档流

  如何解决该问题？
  清除浮动：
  1. 一般不会直接给容器添加清除浮动的操作(clear: left;)
  2. 伪类：
    .clearfix::after {
      content: '';
      clear: left;  (both, right)
      display: table;  (block, fixed都可以)
    }
    给父容器做清除浮动的操作
  3. 子容器有float: left;
     父容器加上float: left / right;可消除float影响


----------------------------------添加在父容器上----------------------------------

# overflow
  overflow: hidden; (auto, overlay, scroll)
  使高度塌陷的容器变成块级，且能格式化上下文，使之成为bfc容器，消除float带来的影响

# display
  display: inline-block;  (table相关属性, inline相关属性, flex, flow-root)
  将一个容器设置成bfc容器

# position
  position: absolute; (fixed)


——————————————————————————————————————————————————————————————————————————————————

## margin重叠问题
  将容器设置成bfc容器

