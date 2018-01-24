
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
    this.sortedList = null;

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
   while (temp != null){
    console.log(temp.getData());
    temp = temp.getNext();

   }
   }

   deleteFirst()
   {
     var data = this.head.getData();
     this.head = this.head.getNext();
     console.log(data);
   }

   deleteLast()
   {
    var temp = this.head;

    while (temp.getNext().getNext() != null){
      //console.log(temp.getData())
     temp = temp.getNext();

    }
    temp.setNext(null);
   }

   search(data)
   {
     var temp = this.head;
     var pos = 1;

       while( temp.getData() != data)
       {

      //console.log(temp.getData())
     temp = temp.getNext();
     pos++;
     if(temp== null)
        {
          console.log("not found")
          return;
        }
    }
    console.log(pos);
   }


//1->2->3->4

recursiveReverse(node){
  if(node == null){
    return null;
  }
  if(node.getNext() == null){
    return node;
  }
  nextElm = node.getNext();
  node.setNext(null);
  var revList = recursiveReverse(nextElm);
  nextElm.setNext(node);
  return revList;
}



   reverse()
   {
     var temp = this.head;
      var prev = null;
       while(temp !=null)
       {
          var temp2 = temp.getNext();
          temp.setNext(prev);
          prev = temp;
          temp=temp2;
       }
       this.head = prev;
   }

 sort()
 {
  var temp = this.head;


  while(temp != null){
   // this.insertionSort(this.sortedList,temp);
   this.InsertionSort2(this.sortedList,temp)
    temp = temp.getNext();
  }
  return this.sortedList;
 }



insertionSort(sortedList,node1){
  if(sortedList == null){
   // node.setNext(sortedList);
    this.sortedList = new node.LinkNode(node1.getData());

  }
  else if(node1.getData()<this.sortedList.getData())
  {
    node1.setNext(this.sortedList);
  }

  else{
    var current = this.sortedList;
     while(current.getNext()!=null && current.getData()<=node1.getData()){
      var nNode = new node.LinkNode(node1.getData());
      var next = current.getNext();
      current.setNext(nNode)
      nNode.setNext(next);

    }
  //

    //currentTemp.setNext(nNode);

    }
  }

InsertionSort2(sortedList,node1){
  var isInserted = false;

    if(sortedList == null){
     // node.setNext(sortedList);
      this.sortedList = new node.LinkNode(node1.getData());

    }
    else {
          var temp = sortedList; //tracks the current node
          var current= null; // tracks the previous node
          while(temp!=null){
            if(temp.getData() < node1.getData()){
            current = temp;
            temp = temp.getNext();
          }
          else{

            var nNode = new node.LinkNode(node1.getData());
            nNode.setNext(temp);
            if(current == null){
              current = nNode;
              this.sortedList = current;
            }
            else{
              current.setNext(nNode);
            }
            isInserted = true;
            break;
          }
        }
      if(!isInserted){
        current.setNext(new node.LinkNode(node1.getData()));
  }
    }
}
}




//()() 3-

 //   while(temp!=null)
 //   {
 //    temp = temp.getNext();
 //    if(temp.getData<small)
 //      small = temp.getData();
 //
 //    if(temp == null)
 //      {
 //  //        temp = temp.setNext(temp2);
 //        temp = temp.getNext();
 //      }
 //
 //   }
 // }
