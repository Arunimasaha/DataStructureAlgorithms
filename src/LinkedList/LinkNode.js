
/**
 * Linked List Node
 */

export class LinkNode
{
 constructor(data){
  this.data = data;
  this.prev = null;
  this.next = null;
}

getPrev(){
  return this.prev;
}

getNext(){
  return this.next;
}

setNext(next){
this.next = next;
}

setPrev(prev){
this.prev = prev;
}

getData(){
return this.data;
}

}
