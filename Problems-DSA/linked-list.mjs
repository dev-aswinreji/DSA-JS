

// Delete the nth element from a linked list

class Node{
    constructor(value) {
        this.value = value
        this.next = null
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

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    removeFromEnd(){
        if(this.isEmpty()){
            console.log('list is empty');
            return null
        }
        const value = this.tail.value
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            if(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
    }

    removeFromFrond(){
        if(this.isEmpty()){
            return null
        }
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next
        }

        this.size--
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty');
            return 
        }
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log('list value :', listValues);
    }

}


const list  = new LinkedList()

list.prepend(4)
list.print()
list.removeFromEnd()
list.prepend(3)
list.prepend(5)
list.removeFromEnd()

list.removeFromFrond()





list.print()