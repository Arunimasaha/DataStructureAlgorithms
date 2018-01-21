'use strict';

var _CircularQueue = require('./CircularQueue');

var cirqueue = _interopRequireWildcard(_CircularQueue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var callcirqueue = new cirqueue.CircularQueue(3); //import {Stack} from 'Stack'
// var stackModule= require('./Stack')
// import * as queue from './Queue'
// var cirqueuemodule = require('./CircularQueue')
// var callStack = new stackModule.Stack(10);

// callStack.push(5);
// callStack.push(7);
// var x=callStack.pop();
// console.log(x);

// var obj= new queue.default(3);
// obj.Enqueue(9)
// obj.Enqueue(8)
// obj.Enqueue(7)
// obj.Enqueue(6)
// var x = obj.Dequeue();
// var y = obj.Dequeue();
// var z = obj.Dequeue();
// var a = obj.Dequeue();
// console.log(x);
// obj.Enqueue(9)
// obj.Enqueue(8)
// obj.Enqueue(7)
// obj.Enqueue(6)

callcirqueue.enqueue(4);
callcirqueue.enqueue(9);

var y = callcirqueue.getSize();
callcirqueue.enqueue(8);
callcirqueue.enqueue(7);
var x = callcirqueue.dequeue();
var k = callcirqueue.getSize();
console.log(x);
callcirqueue.enqueue(7);
var x = callcirqueue.dequeue();
console.log(x);
//# sourceMappingURL=test.js.map