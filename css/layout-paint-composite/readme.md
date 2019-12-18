## 
  html(string) 解析为dom树
  css 解析为cssom
  合成 render tree
  生成 layout tree
  绘制 paint 
  合成 composite：一个页面有很多分层，最终合成一个平面


# 性能优化
  js relayout repaint composite

  重排一定会引起重绘，重绘不一定引起重排。
  改变了元素的布局：width, height, display, 
  (重排)layout -> 改变了元素的color, shadow (重绘)repaint -> composite: transform, opacity
  前提条件：变化的元素要处于一个独立的'层'上面。

  影响的是：当前处于的'层'

  提升：把在平面的dom结构提升一层
  1. will-change: transform
  2. 3d transform: `translate3d(60px, 0, 0)`
  3. animation transition 激活的时候
  4. video
  5. backface-visibility: hidden;
  