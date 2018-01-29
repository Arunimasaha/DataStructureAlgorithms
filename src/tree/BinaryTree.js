
import * as treeNode from './TreeNode.js'
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
}
