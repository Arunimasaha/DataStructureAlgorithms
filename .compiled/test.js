'use strict';

var _Queue = require('./Queue');

var queue = _interopRequireWildcard(_Queue);

var _CircularQueue = require('./CircularQueue');

var cirqueue = _interopRequireWildcard(_CircularQueue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//import {Stack} from 'Stack'
var stackModule = require('./Stack');

var cirqueuemodule = require('./CircularQueue');
var callStack = new stackModule.Stack(10);

callStack.push(5);
callStack.push(7);
var x = callStack.pop();
console.log(x);

var obj = new queue.Queue(3);
obj.enqueue(9);
obj.enqueue(8);
obj.enqueue(7);
obj.enqueue(6);
var x = obj.dequeue();
var y = obj.dequeue();
var z = obj.dequeue();
var a = obj.dequeue();
console.log(x);
obj.enqueue(9);
obj.enqueue(8);
obj.enqueue(7);
obj.enqueue(6);

var callcirqueue = new cirqueue.CircularQueue(3);
callcirqueue.enqueue(4);
callcirqueue.enqueue(9);

var y = callcirqueue.getSize();
callcirqueue.enqueue(8);
callcirqueue.enqueue(7);
var x = callcirqueue.dequeue();

console.log(x);
callcirqueue.enqueue(7);
var x = callcirqueue.dequeue();
console.log(x);
//# sourceMappingURL=test.js.map