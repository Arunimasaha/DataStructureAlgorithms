/**
* Contains code for tree traversal.
* 1. Pre Order
* 2. Post Order
* 3. In Order
* 4. Level Order
*/

import * as treeNode from './TreeNode'

export class TreeTraversal{
    
    static recursivePreOrder(root){
        if(root!=null){
            console.log(root.getData());
            this.recursivePreOrder(root.getLeftChild());
            this.recursivePreOrder(root.getRightChild());
        }
    }
    
    static isMirrorImage(root1,root2){
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
    
    static createMirrorTree(root){
        if(root == null)
        return null;
        var leftChild = this.createMirrorTree(root.getLeftChild());
        var rightChild = this.createMirrorTree(root.getRightChild());
        
        var tempNode = new treeNode.TreeNode(root.getData());
        tempNode.setLeftChild(rightChild);
        tempNode.setRightChild(leftChild);
        
        return tempNode;
    }
    
    static postOrder2(root){
        var poststack = new stack.Stack(20);
        while(true){
            if(root){
                poststack.push(root);
                root = root.getLeftChild();
            }
            else{
                if(poststack.isEmpty()){
                    return;
                }
                else if(poststack.peek() == null){
                    root = poststack.pop();
                    console.log(root.getData());
                    if(root.getData() == poststack.peek().getData()){
                        console.log(poststack.peek().getData());
                        poststack.pop()
                    }
                }
                if(!poststack.isEmpty()){
                    root = poststack.peek().getRightChild();
                }
                else
                {
                    root = null;
                } 
            }
        }
    }
    
} 