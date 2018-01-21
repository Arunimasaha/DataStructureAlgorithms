export class Queue{

    constructor(capacity){
      this.queue = [];
      this.head = -1;
      this.tail = -1;
      this.capacity = capacity;
    }

    isFull(){
      return this.size === this.capacity;
    }

    isEmpty(){
      return this.size === 0;
    }

    enqueue(data){
      if(this.isFull()){
          console.log("queue is full");
          return;
      }
      this.rear = (this.rear +1 ) % this.capacity;
      this.queue[this.rear] = data;
      this.size ++;
    }

    dequeue(){
      if(this.isEmpty()){
          console.log("Queue is empty");
          return;
      }
      this.front = (this.front + 1) % this.capacity;
      var data = this.queue[this.front];
      this.size--;
      return data;
  }
}
