
class Node {
  constructor (value) {
   this.value = value 
    this.left = null
    this.right = null
  }
}


class BinarySearchTree{
  constructor(){
    this.root = null
  }


  isEmpty(){
    return this.root === null
  }

  insert(value){
    const newNode = new Node(value)
    if(this.isEmpty()){
     this.root = newNode 
    }else{
      this.insertNode(this.root,newNode)
    }
  }


  insertNode(root,newNode){
    if(newNode.value < root.value){
      if(!root.left){
        root.left = newNode
      }else {
        this.insertNode(root.left,newNode)
      } 
    }else {
      if(!root.right){
        root.right = newNode
      }else{
        this.insertNode(root.right,newNode)
      }
    }
  }

  levelOrder(root){
    let queue = []
    queue.push(root.value);
    while(queue.length){
      let value = queue.shift()
      console.log(value)
      if(root.left){
        queue.push(root.left)
      }
      if(root.right){
        queue.push(root.right)
      }
    }
    levelOrder(root.left)
    levelOrder(root.right)
  }

  preOrder(root){
    if(root){
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }  
  }

  inOrder(root){
    if(root){
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }

  postOrder(root){
    if(root){
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value)
    }
  }

  maxDepth (root){
    if(root === null){
      return 0
    }else {
      let lDepth = this.maxDepth(root.left)
      let rDepth = this.maxDepth(root.right)

      if(lDepth > rDepth){
        return (lDepth + 1)
      }else{
        return (rDepth + 1)
      }
    }
  }

  print(){
    console.log(this.root)
  }

}


const bst = new BinarySearchTree()

bst.insert(50)

bst.insert(40)



bst.print()

console.log(bst.maxDepth(bst.root))


