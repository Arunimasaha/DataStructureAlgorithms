export class TreeNode
{
   constructor(data){
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }

getLeftChild()
{
  return this.leftChild;
}
getRightChild()
{
  return this.rightChild;
}

setLeftChild(leftChild)
{
  this.leftChild = leftChild ;
}
setRightChild(rightChild)
{
  this.rightChild = rightChild;
}
getData()
{
  return this.data;
}
setData(data)
{
  this.data = data;
}
}