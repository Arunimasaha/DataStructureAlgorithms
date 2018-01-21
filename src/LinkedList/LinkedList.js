
/**
 * LinkedList Implementation
 */


 // class : Node {data , prev, next}
 //
 //
 // class :ListImpl
 // {
 // addFirts()
 // addAtPosition(position)
 // addlst()
 // deleteFirst()
 // deleteLast()
 // traverse()
 // search(data)
 // reverse() // ussing stack and recursion
 // sort()
 //
 // }

// head : 1->2->3->[4]

// head : 1{data,next=[2]}->2{data,next[3]}->3{data,next[null]}
// [4]
import * as node from './LinkNode'
 export class LinkedList
 {

  constructor(){
    this.head = null;
    this.size =0;
    this.tail = null;

  }

  addFirst(data){
    var lnknd = new node.LinkNode(data);
    if(this.head == null){
      this.head = lnknd;
    }
    else{
      lnknd.setNext(this.head);
      this.head = lnknd;
    }
    this.size++;
  }

  addLast(data){
    var lnknd = new node.LinkNode(data);
    var temp = this.head;
    while (temp.getNext() != null){
      temp = temp.getNext();
    }
    temp.setNext(lnknd);
      this.size++;
  }

  addAtPosition(data, position){
    var pos=0;
    var lnknd = new node.LinkNode(data);
    var temp = this.head;
    if (position > this.size)
    {
      return;
    }
    this.size++;
    while(++pos!=position)
    {
      temp = temp.getNext();
    }
    var nextNode = temp.getNext();
    lnknd.setNext(nextNode);
    temp.setNext(lnknd);
}


 traverse(){
   var temp = this.head;
   while (temp.getNext() != null){
    console.log(temp.getData()); 
    temp = temp.getNext();
     
   }
   }
 }
