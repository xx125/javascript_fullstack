"use strict";
var notSure = 4;
notSure = 'wn';
var value;
value = true;
value = 1;
value = 'hello';
value = Symbol('type');
value = { wn: '1' };
value = [1, 2, 5];
value = undefined;
value = null;
value.foo.bar;
value();
new value();
value[0][1];
var val;
val = true;
val = 1;
val = 'hello';
val = Symbol('type');
val = { wn: '1' };
val = [1, 2, 5];
val = undefined;
val = null;
function error(message) {
    throw new Error(message);
}
var empty = [];
var list = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
var x;
x = ['hello', 10, false];
var Direction;
(function (Direction) {
    Direction[Direction["centre"] = 1] = "centre";
})(Direction || (Direction = {}));
var Value;
Value = Direction;
Value = [1];
Value = [1, 'hello'];
Value = {};
//# sourceMappingURL=unbase.js.map