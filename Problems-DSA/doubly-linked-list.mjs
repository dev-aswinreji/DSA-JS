

class Node{
  constructor(value){
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList{
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  isEmpty(){
    return this.length === 0
  }

  getLength(){
    return this.length
  }

  prepend(value){
    const newNode = new Node(value)

    if(this.isEmpty()){
      this.head = newNode
      this.tail = newNode
    }else{
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
  }

  append(value){
    const newNode = new Node(value)
    if(this.isEmpty()){
      this.head = newNode
      this.tail = newNode
    }else{
      let lastNode = this.tail
      lastNode.next = newNode
      newNode.prev = lastNode
      this.tail = newNode
    }
    this.length++
  }

  insert(value,index){
    if(index < 0 || index > this.length){
      console.log('Invalid index');
    }
    if(index === 0){
      this.prepend(value)
    }else{
      const newNode = new Node(value)
      let prevNode = this.head
      for(let i = 0; i<index -1 ; i++){
        prevNode = prevNode.next
      }
      let nextNode = prevNode.next

      newNode.next = nextNode
      newNode.prev = prevNode
      nextNode.prev = newNode
      prevNode.next = newNode
      this.length++
    }
  }



  print(){
    if(this.isEmpty()){
      console.log('List is empty');
      return 
    }else{
      let curr = this.head
      let list = ''

      while(curr){
        list += curr.value + ' '
        curr = curr.next
      }
      console.log(list,'list is showing');
    }
  }
}


const list = new LinkedList()

list.prepend(10)

list.prepend(20)

list.append(5)

list.insert(15,1)

list.print()