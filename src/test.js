//import {Stack} from 'Stack'
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

import * as cirqueue from './CircularQueue'

var callcirqueue = new cirqueue.CircularQueue(3)
callcirqueue.enqueue(4)
callcirqueue.enqueue(9)

var y= callcirqueue.getSize();
callcirqueue.enqueue(8)
callcirqueue.enqueue(7)
var x = callcirqueue.dequeue();
var k = callcirqueue.getSize();
console.log(x);
callcirqueue.enqueue(7)
var x = callcirqueue.dequeue();
console.log(x);


