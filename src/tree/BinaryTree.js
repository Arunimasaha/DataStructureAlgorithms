import * as stack from '../Stack'
import * as treeNode from './TreeNode.js'
import * as queue from '../Queue'
export class BinarySearchTree
{
    constrctor()
    {
        this.root = null;
        this.height = null;
        this.index = 0;
    }
    
    addNode(rootElm,treeElm)
    {
        if (this.root == null)
        {
            this.root = treeElm;
        }
        
        else
        {
            
            if(rootElm.getData() >= treeElm.getData()){
                
                if (rootElm.getLeftChild()== null) //left child
                {
                    rootElm.setLeftChild(treeElm);
                }
                else
                {
                    this.addNode(rootElm.getLeftChild(),treeElm);
                }
            }
            else{
                if (rootElm.getRightChild() == null)
                {
                    rootElm.setRightChild(treeElm);
                }
                else
                {
                    this.addNode(rootElm.getRightChild(),treeElm);
                }
            }
        }
    }
    
    
    
    createNode(data){
        return new treeNode.TreeNode(data);
    }
    
    getRoot(){
        return this.root;
    }
    
    getParent(root, Elem)
    {
        if(root== null)
        {
            console.log("not found")
            return -1;
        }
        else {
            
            if((root.getRightChild() != null && root.getRightChild().getData() == Elem) ||
            (root.getLeftChild() != null && root.getLeftChild().getData() == Elem))
            {
                return root;
            }
            
            else
            {
                var left = this.getParent(root.getLeftChild(),Elem);
                var right = this.getParent(root.getRightChild(),Elem);
                if (left == right && left == -1)
                {
                    return -1;
                }
                else
                {
                    return left == -1 ? right : left
                }
            }
        }
    }
    maxElem(root)
    {
        
        if(root.getRightChild() != null)
        {
            return this.maxElem(root.getRightChild());
        }
        else if(root.getLeftChild() !=null && root.getLeftChild()> root.getData())
        {
            return this.maxElem(root.getLeftChild())
        }
        
        else
        return root.getData();
        
    }
    
    minElem(root)
    {
        
        if(root.getLeftChild() !=null)
        {
            return this.minElem(root.getLeftChild())
        }
        else if(root.getRightChild() != null && root.getRightChild()<root.getData())
        {
            return this.minElem(root.getRightChild());
        }
        
        else
        return root.getData();
    }
    
    search(root, Elem)
    {
        if(root== null)
        {
            console.log("not found")
            return -1;
        }
        else if(root.getData() == Elem)
        {
            return root;
        }
        
        else if(Elem < root.getData())
        {
            return this.search(root.getLeftChild(),Elem);
        }
        else
        {
            return this.search(root.getRightChild(),Elem);
        }
    }
    
    deleteNode(root , Elm)
    {
        var pos = this.search(root , Elm)
        if(pos == -1)
        {
            console.log("does not exist");
        }
        else if(pos.getRightChild() == null && pos.getLeftChild() == null)
        {
            var parent = this.getParent(root, Elm)
            if((parent.getRightChild() != null && parent.getRightChild().getData() == Elm))
            {
                parent.setRightChild(null)
            }
            else if((parent.getLeftChild() != null && parent.getLeftChild().getData() == Elm))
            {
                parent.setLeftChild(null)
            }
        }
    }
    
    recursivePreOrder(root){
        if(root!=null){
            console.log(root.getData());
            this.recursivePreOrder(root.getLeftChild());
            this.recursivePreOrder(root.getRightChild());
        }
    }
    
    recursivePostOrder(root){
        if(root!=null)
        {
            this.recursivePostOrder(root.getLeftChild());
            this.recursivePostOrder(root.getRightChild());
            console.log(root.getData());
        }
    }
    
    recursiveInOrder(root)
    {
        if(root!=null)
        {
            this.recursiveInOrder(root.getLeftChild());
            console.log(root.getData());
            this.recursiveInOrder(root.getRightChild());
        }
    }
    
    isMirrorImage(root1,root2){
        if(root1 == null && root2 == null){
            return true;
        }
        if((root1 == null && root2 != null) || (root1 != null && root2 ==null)){
            return false;
        }
        if(root1.getData() == root2.getData()){
            return this.isMirrorImage(root1.getLeftChild(),root2.getRightChild()) &&
            this.isMirrorImage(root1.getRightChild(),root2.getLeftChild());
        }
        return false;
    }
    
    createMirrorTree(root){
        if(root == null)
        return null;
        var leftChild = this.createMirrorTree((root.getLeftChild()));
        var rightChild = this.createMirrorTree(root.getRightChild());
        
        var tempNode = new treeNode.TreeNode(root.getData());
        tempNode.setLeftChild(rightChild);
        tempNode.setRightChild(leftChild);
        
        return tempNode;
    }
    
    nonRecursivePreOrder(root){
        var preStack = new stack.Stack(20)
        while(true){
            while(root != null){
                console.log(root.getData());
                preStack.push(root);
                root = root.getLeftChild();
            }
            if(!preStack.isEmpty()){
                root = preStack.pop();
                root = root.getRightChild();
            }
            else{
                break;
            }
        }
    }
    
    nonRecursiveInOrder(root){
        var instack = new stack.Stack(20)
        while(true)
        {
            while(root!=null)
            {
                instack.push(root)
                
                root = root.getLeftChild();
                
            }
            if(!instack.isEmpty())
            {
                root = instack.pop();
                console.log(root.getData())
                
                root = root.getRightChild();
            }
            else
            {
                break;
            }
        }
    }
    
    nonRecursivePostOrder(root)
    {
        var poststack = new stack.Stack(20);
        while(true)
        {
            while(root!=null)
            {
                if(root.getRightChild() != null)
                poststack.push(root.getRightChild())
                
                poststack.push(root)
                root = root.getLeftChild();
            }
            if(!poststack.isEmpty())
            {
                root = poststack.pop()
                if(root.getRightChild()!= null && (root.getRightChild() == poststack.peek()))
                {
                    
                    
                    var x= poststack.pop();
                    
                    // poststack.push(root);
                    poststack.push(root)
                    // poststack.push(x)
                    root = root.getRightChild();
                    
                }
                else
                {
                    console.log(root.getData());
                    root = null
                }
            }
            else
            {
                break;
            }
            
        }
    }
    
    LevelOrder(root)
    {
        var LevelQ = new queue.Queue(20);
        console.log(root.getData());
        do
        {
            if(root.getLeftChild() != null)
            {
                LevelQ.enqueue(root.getLeftChild());
                console.log(root.getLeftChild().getData());
            }
            if(root.getRightChild() != null)
            {
                LevelQ.enqueue(root.getRightChild());
                console.log(root.getRightChild().getData())
            }

            root = LevelQ.dequeue();
        }
        while(!LevelQ.isEmpty())
        
    }

    TreePaths(root)
    {
        var pathStack = new stack.Stack(20);
        

        if(root.getLeftChild() != null && root.getRightChild() != null)
        {
            pathStack.push(root)
            root = root.getLeftChild();
        }
       
            if(!isEmpty())
            {
                var x = pathStack.pop();
                if(x.getRightChild() != null)
                {
                    root = x.getRightChild();
                    pathStack.push(x.getRightChild())
                }
            }
            pathStack.print();
        
    }
    
    
}
