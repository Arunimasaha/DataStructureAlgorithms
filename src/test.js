//import {Stack} from 'Stack'
var stackModule= require('./Stack')
import * as queue from './Queue'
import * as ll from './LinkedList/LinkedList'
import * as dll from './LinkedList/DoubleLinkedList'
import * as tree from './tree/BinaryTree'

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
callLinkedList.reverse();
var sortedList = callLinkedList.sort();
callLinkedList.traverse();
callLinkedList.search(7);
callLinkedList.LoopDetection();
callLinkedList.LoopDetection();

var callDoubleLinledList = new dll.DoubleLinkedList()
callDoubleLinledList.addFirst(1);
callDoubleLinledList.addFirst(3);
callDoubleLinledList.addLast(5);
callDoubleLinledList.addLast(6);
callDoubleLinledList.deleteFirst();

var callBinaryTree = new tree.BinarySearchTree();
var callBinaryTree2 = new tree.BinarySearchTree();
var root = callBinaryTree.createNode(9);
callBinaryTree.addNode(null,root);
callBinaryTree.addNode(root,callBinaryTree.createNode(1));
callBinaryTree.addNode(root,callBinaryTree.createNode(5));
 callBinaryTree.addNode(root,callBinaryTree.createNode(8));
 callBinaryTree.addNode(root,callBinaryTree.createNode(20));
 callBinaryTree.addNode(root,callBinaryTree.createNode(15));
var root1 = callBinaryTree.createMirrorTree(root);
callBinaryTree.isMirrorImage(root,root1);

var max=callBinaryTree.maxElem(root);
var min = callBinaryTree.minElem(root);

var elem = callBinaryTree.search(root,3);
var parent = callBinaryTree.getParent(root,15);
callBinaryTree.deleteNode(root, 15);




