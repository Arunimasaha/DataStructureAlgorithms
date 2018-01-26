
import * as treeNode from './TreeNode.js'
export class BinarySearchTree
{
    constrctor()
    {
        this.root = null;
        this.height = null;
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
}
