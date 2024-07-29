

class Node {
  constructor (value) {
  this.value = value 
  this.right = null
  this.left = null
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
    if(newNode <= root.value ){
     if(root.left === null){
       root.left = newNode
     }else{
       this.insertNode(root.left,newNode)
     }

    }else{
      if(root.right === null){
        root.right = newNode
      }else{
        this.insertNode(root.right,newNode)
      }
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

heap.print()
