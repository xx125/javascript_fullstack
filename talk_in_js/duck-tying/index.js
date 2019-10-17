/* 鸭子王国，1000只鸭子，鸭子合唱团 */

const choir = [];   //合唱团

//加入合唱团
function joinChoir(ani) {
    if (ani && typeof ani.duckSinging == 'function') {
        choir.push(ani);
    } else {
        console.log('不合要求');
    }

    if (choir.length >= 1000) {
        console.log('任务完成');
    } else {
        console.log('当前已完成' + choir.length + '位招募');
    }
}
/* 对象由两部分构成，属性和方法 */
let duck = {
    name:'王小鸭',
    /* 能干一件事 */
    duckSinging: function() {
        console.log('嘎嘎嘎');
    }
}

let chicken = {
    name:'山鸡',
    chickenSinging: function() {
        console.log('叽叽叽');
    },
    duckSinging: function() {
        console.log('嘎嘎嘎');
    }
}

// duck.duckSinging();
for(let i = 0; i < 999; i++) {
    joinChoir(duck);
}

joinChoir(chicken);