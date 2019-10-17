/**
 * 
 * @param {array} piles
 * @param {int} H
 * @return {int} lo
 * @func 求最慢的吃法
 */ 

/* 
1 .. 11  时间复杂度 O(n)

二分查找  时间复杂度 log2N => 8  3
5根/小时，若可以吃到H小时，只要再去左边找就可以，反之，找右边；每次都可以放掉一般的尝试
1 .. 4 找2
3 .. 4 找到4 
*/

const canEatAllBananas = (piles, H, mid) => {
    // 能吃完
    let h = 0;
    for (let pile of piles) {
        h += Math.ceil(pile / mid);
    }
    return h <= H;
}

const minEatingSpeed = (piles, H) => {
    let lo = 1;
    let hi = Math.max(...piles);
    let mid = 0;
    //console.log(1 .. hi  最小)  从中间试;
    while (lo <= hi) {
        mid = lo + ((hi - lo) >> 1);   
        console.log(lo, mid, hi, '++++');
        if (canEatAllBananas(piles, H, mid)) {
            hi = mid - 1;   //取左边
        } else {
            lo = mid + 1;   //取右边
        }
    }
    console.log (lo, mid, hi, '-------')
    return lo;
}
console.log(minEatingSpeed([3, 6, 7, 11], 8));