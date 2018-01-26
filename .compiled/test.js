'use strict';

var _Queue = require('./Queue');

var queue = _interopRequireWildcard(_Queue);

var _LinkedList = require('./LinkedList/LinkedList');

var ll = _interopRequireWildcard(_LinkedList);

var _DoubleLinkedList = require('./LinkedList/DoubleLinkedList');

var dll = _interopRequireWildcard(_DoubleLinkedList);

var _BinaryTree = require('./tree/BinaryTree');

var tree = _interopRequireWildcard(_BinaryTree);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//import {Stack} from 'Stack'
var stackModule = require('./Stack');


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

var callLinkedList = new ll.LinkedList();
callLinkedList.addFirst(9);
callLinkedList.addFirst(8);
callLinkedList.addLast(7);
callLinkedList.addAtPosition(1, 2);
callLinkedList.addAtPosition(4, 5);
//callLinkedList.deleteLast();
callLinkedList.reverse();
var sortedList = callLinkedList.sort();
callLinkedList.traverse();
callLinkedList.search(7);
callLinkedList.LoopDetection();
callLinkedList.LoopDetection();

var callDoubleLinledList = new dll.DoubleLinkedList();
callDoubleLinledList.addFirst(1);
callDoubleLinledList.addFirst(3);
callDoubleLinledList.addLast(5);
callDoubleLinledList.addLast(6);
callDoubleLinledList.deleteFirst();

var callBinaryTree = new tree.BinarySearchTree();
var root = callBinaryTree.createNode(9);
callBinaryTree.addNode(null, root);
callBinaryTree.addNode(root, callBinaryTree.createNode(1));
callBinaryTree.addNode(root, callBinaryTree.createNode(5));
callBinaryTree.addNode(root, callBinaryTree.createNode(8));
callBinaryTree.addNode(root, callBinaryTree.createNode(11));
callBinaryTree.addNode(root, callBinaryTree.createNode(10));
//# sourceMappingURL=test.js.map



