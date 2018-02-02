
 function Stack(capacity)
{
  this.stack = []; // to store my data
  this.size = -1 ; // initializing empty stack
  this.capacity = capacity;
  
}

Stack.prototype.push = function(val)
{
  if(this.isFull())
  {
    console.log("stack is already full");
  }
  else {
    this.size = this.size+1;
    this.stack[this.size]=val;
  }
}

Stack.prototype.pop = function()
{
  if(this.isEmpty())
  {
    console.log("stack is already empty");
  }
  else{
    var x = this.stack[this.size];
    delete this.stack[this.size];
    this.size = this.size-1;
    return x;
  }
}

Stack.prototype.print = function()
{
  this.stack.forEach(function(x)
{console.log(x)});

}

Stack.prototype.peek = function()
{
  if(this.isEmpty())
  {
    console.log("stack is empty");
    return null;
  }
  else
  {
    var x = this.stack[this.size]
    return x;
  }
}

Stack.prototype.isEmpty = function() // checks underflow
{
  return this.size === -1 ? true : false;
}

Stack.prototype.isFull = function() // checks overflow
{
  return this.size === this.capacity-1 ? true : false;
}

module.exports = {Stack:Stack}