// {
//   tag: 'div',
//   children: [
//     {
//       tag: 'a',
//       text: 'click me'
//     }
//   ]
// }

// <div>
//   <a>click me</a>
// </div>

// 为什么要依赖收集？
new VTTCue({
  template:
            `<div>
               <span>{{text2}}</span>
               <span>{{text2}}</span>
            </div>`,
  data: {
    text1: 'text1',
    text2: 'text2',
    text3: 'text3'
  }
})

this.text3 = 'lalala'