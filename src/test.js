//import {Stack} from 'Stack'
var stackModule= require('./Stack')
import * as queue from './Queue'
import * as ll from './LinkedList/LinkedList'
// var cirqueuemodule = require('./CircularQueue')
// var callStack = new stackModule.Stack(10);

// callStack.push(5);
// callStack.push(7);
// var x=callStack.pop();
// console.log(x);

// var obj= new queue.Queue(3);
// obj.enqueue(9)
// obj.enqueue(8)
// obj.enqueue(7)
// obj.enqueue(6)
// var x = obj.dequeue();
// var y = obj.dequeue();
// var z = obj.dequeue();
// var a = obj.dequeue();
// console.log(x);
// obj.enqueue(9)
// obj.enqueue(8)
// obj.enqueue(7)
// obj.enqueue(6)

// import * as cirqueue from './CircularQueue'

// var callcirqueue = new cirqueue.CircularQueue(3)
// callcirqueue.enqueue(4)
// callcirqueue.enqueue(9)

// var y= callcirqueue.getSize();
// callcirqueue.enqueue(8)
// callcirqueue.enqueue(7)
// var x = callcirqueue.dequeue();
// var k = callcirqueue.getSize();
// console.log(x);
// callcirqueue.enqueue(7)
// var x = callcirqueue.dequeue();
// console.log(x);

var callLinkedList = new ll.LinkedList()
callLinkedList.addFirst(9);
callLinkedList.addFirst(8);
callLinkedList.addLast(7);
callLinkedList.addAtPosition(1,2);
callLinkedList.addAtPosition(4,5);
//callLinkedList.deleteLast();
callLinkedList.traverse();
callLinkedList.search(7);



