

class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}


class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }


    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.head.prev =  node
            node.next = this.head
            this.head = node
            node.prev = null
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            let prev = this.tail
            prev.next = node
            this.tail.prev = node.prev
            node.next = null
        }
        this.size++
        return value
    }

    insert(value,index){
        if(index < 0 || index > this.size ){
            console.log('index is not valid');
            return 
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i = 0 ; i< index -1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next.prev = node.next
            prev.next = node            
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty');
            return 
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log('list values are', listValues);
        }
    }
}


const list = new LinkedList()

list.prepend(4)
list.prepend(8)
list.prepend(6)

list.append(3)

list.insert(3,3)

list.print()