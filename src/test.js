//import {Stack} from 'Stack'
var stackModule= require('./Stack')
var callStack = new stackModule.Stack(10);

callStack.push(5);
callStack.push(7);
var x=callStack.pop();
console.log(x);

