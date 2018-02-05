export class BinaryHeap
{
    constructor()
    {
        this.root = [];
       // this.index = 0;
    }

    setData(data)
    {
        this.root = data;
    }
    maxHeapify(i , n)
    {
        var largest = 0;
        var left = 2*i +1;
        var right = 2*i + 2;
        if(left < n && this.root[left]>this.root[i])
        {
            largest = left

        }
        else
        largest = i;

        if(right <n && this.root[right]>this.root[largest])
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
    minHeapify(i,n)
    {
        var small = 0;
        var left = 2*i +1;
        var right = 2*i + 2;
        if(left < n && this.root[left]<this.root[i])
        {
            small = left

        }
        else
        small = i;

        if(right <n && this.root[right]<this.root[small])
        {
            small = right
        }
        if (small != i)
        {
            var x = this.root[small]

            this.root[small] = this.root[i];
            this.root[i] = x;
            this.minHeapify(small, n)
        }
    }
    getRightChild(i)
    {
        return this.root[2*i + 2]
    }
    getLeftChild(i)
    {
        return this.root[2*i + 1]
    }
    buildHeap()
    {
        var heapSize = this.root.length;
        for (let i = Math.floor((heapSize-1)/2) ; i>= 0 ; i--)
        {
            this.minHeapify(i, heapSize)
        }
    }
    heapSort()
    {
        var heapSize = this.root.length -1;
        this.buildHeap();
        for(let i = heapSize; i>1 ; i--)
        {
            var large = this.root[0]
            this.root[0] = this.root[i];
            this.root[i] = large;
            heapSize = heapSize - 1
            this.maxHeapify(0, heapSize )

        }


    }
    insertHeap(elem)
    {
        this.root.push(elem)
        var heapSize = this.root.length - 1;
        for(let i = heapSize; i>0 ; i=Math.floor((i-1)/2))
        {
            var val = Math.floor((i-1)/2)
            if(this.root[i]> this.root[val] )
            {
                var big = this.root[i]
                this.root[i] = this.root[val]
                this.root[val] = big;

            }
        }
    }
    deleteHeap(elem)
    {
        var replacementIndex ;
        for(let i = 0 ; i< this.root.length ; i++)
        {
            var flag = 0
            if(this.root[i] == elem)
            {
                delete this.root[i];
                flag =1
                replacementIndex = i;
                break;
            }

        }
        if(flag == 0)
        {
            console.log("not found")
        }
        else
        {
        var farthest = this.root[this.root.length - 1]
        this.root.splice(this.root.length - 1,1)
        this.root[replacementIndex] = farthest;


      if(this.root[replacementIndex/2] < this.root[replacementIndex])
        {
          this.percolateUp(replacementIndex);
        }
      else{
        this.maxHeapify(replacementIndex,this.root.length - 1 )
      }
  }

    }

    percolateUp(k){
      var parent;                 /* parent = parent */
      var help;

    while ( k != 0 )    /* k has a parent node */
    {

       parent = k/2;

       if ( this.root[k] < this.root[parent] )
       {
          help = this.root[parent];
          this.root[parent] = this.root[k];
          this.root[k] = help;

          /* ===============================
       Continue filter up one level
       =============================== */
          k = parent;          // k moved up one level
       }
       else
       {
          break;
       }

    }
}
}
