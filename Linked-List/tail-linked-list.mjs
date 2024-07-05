

// prepend append print search reverse 

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }
    // Insertion at beginning is O(1)

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            console.log(this.head);
            node.next = this.head
            this.head = node
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
            this.tail = node
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--                                  // Need to increment and decrement the size
        return value
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        let removeNode
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }

    print() {
        if (this.isEmpty()) {
            console.log('list is empty');
            return
        } else {
            let curr = this.head
            let listOfValues = ''

            while (curr) {
                listOfValues += `${curr.value} `
                curr = curr.next
            }
            console.log('List Values :', listOfValues);
        }
    }
}


const list = new LinkedList()

list.prepend(3)
list.prepend(6)
list.prepend(8)

list.append(2)

list.removeFromEnd()
list.removeFromFront()

list.print()

console.log(list.getSize());