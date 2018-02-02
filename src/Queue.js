export class Queue{

    constructor(capacity){
      this.queue = [];
      this.rear = -1;
      this.front = -1;
      this.capacity = capacity;
    }

    isFull(){
      if (this.rear == this.capacity-1)
       return true;
       else
       return false;

    }

    isEmpty(){
      if(this.rear == this.front && this.front==-1)
       return true
       else if (this.rear == this.front)
       {
          this.rear = -1;
      this.front = -1;
       return true
       }
       else
       return false
    }

    enqueue(data){
      if(this.isFull()){
          console.log("queue is full");
          return;
      }
      this.rear = this.rear +1 ;
      this.queue[this.rear] = data;
      
    }

    dequeue(){
      if(this.isEmpty()){
          console.log("Queue is empty");
          return;
      }
      this.front=this.front+1;
      var data = this.queue[this.front];
      delete(this.queue[this.front])
      
     
      return data;
  }
}
