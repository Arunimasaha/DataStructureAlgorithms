/**
 * Contains code for tree traversal.
 * 1. Pre Order
 * 2. Post Order
 * 3. In Order
 * 4. Level Order
 */


export class TreeTraversal{

    static recursivePreOrder(root){
        if(root!=null){
            console.log(root.getData());
            this.recursivePreOrder(root.getLeftChild());
            this.recursivePreOrder(root.getRightChild());
        }
    }
} 