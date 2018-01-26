import * as node from './LinkNode'

export class DoubleLinkedList
{
    constructor(){
        this.head = null;
        this.size =0;
        this.tail = null;
        this.sortedList = null;

      }

    addFirst(data)
    {
        var lnknd = new node.LinkNode(data);
        if(this.head == null){
          this.head = lnknd;
          this.tail = lnknd;
        }
        else{
          this.head.setPrev(lnknd);
          lnknd.setNext(this.head);
          this.head = lnknd;
        }
        this.size++;
    }
    addLast(data)
    {
        var lnknd = new node.LinkNode(data);
        var temp = this.tail
        if(this.head == null){
            this.head = lnknd;
            this.tail = lnknd;
          }
          else{

              lnknd.setPrev(temp);
              temp.setNext(lnknd)
              this.tail = lnknd;


          }
          this.size++;
    }
    deleteFirst()
    {
        var Fnode = this.head.getNext();
        Fnode.setPrev(null);
        this.head = Fnode;
    }
}
