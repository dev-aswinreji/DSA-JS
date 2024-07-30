

class Node {
  constructor (value) {
  this.left = null
  this.value = value 
  this.right = null
  }
}

class minHeap {
  constructor () {
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
    if(root.value <= newNode.value){
      if(!root.left){
      root.left = newNode
      }else if(!root.right){
        root.right = newNode
      }
      insertNode(root.left,newNode)
    }else{

    }
  }
  print(){
  console.log(this.root)
  }

}


const heap = new minHeap()
heap.insert(10)
heap.insert(20)
heap.insert(30)
heap.insert(50)
heap.insert(60)
heap.insert(5)
heap.insert(5)
heap.insert(5)
heap.insert(5)

heap.print()
