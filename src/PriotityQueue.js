import * as node from './PqueueNode'


export class PriorityQueue
{
    constructor()
    {
        this.root = null
        
      }
     createQueue()
      {
      
      var temp = [new node.PqueueNode(10,2), new node.PqueueNode(12,1)];
      this.root = temp
      }
     maxHeapify(i,n)
     {
        var largest = 0;
        var left = 2*i +1;
        var right = 2*i + 2;
        if(left <= n && this.root[left].priority>this.root[i].priority)
        {
            largest = left

        }
        else
        largest = i;

        if(right <= n && this.root[right].priority>this.root[largest].priority)
        {
            largest = right
        }
        if (largest != i)
        {
            var big = this.root[largest]

            this.root[largest] = this.root[i];
            this.root[i] = big;
            this.maxHeapify(largest, n)
        }

     }
      Enqueue(elem, priority)
      {
        
        this.root.push(new node.PqueueNode(elem,priority))
      }

}

    