export class CircularQueue{

  constructor(capacity){
    this.queue = [];
    this.front = -1;
    this.rear = -1;
    this.size = 0;
    this.capacity = capacity;
  }

  getSize()
  {
    return (this.capacity-this.front+this.rear +1 )%this.capacity
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
    if(this.front === -1){
      this.front = this.rear;
    }
  }

  dequeue(){
    if(this.isEmpty()){
        console.log("Queue is empty");
        return;
    }
    
    var data = this.queue[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return data;
}
}
