class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
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

    enqueue(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.tail
            this.tail = newNode
        }
        this.size++
    }

    unshift() {
        if (this.isEmpty()) {
            console.log('Queue is empty')
            return
        }
        console.log(this.size,);
        if (this.size === 1) {
            this.head = null
            this.tail = null
            this.size--
        }
        else {
            let prev = this.tail
            while (prev.next !== this.head) {
                prev = prev.next
            }
           
            prev.next = null
            this.head = prev
            this.size--
        }
    }
    print() {
        if(this.isEmpty()){
            console.log('Queue is empty');
            return
        }
        let curr = this.tail
        let str = ''
        while (curr) {
            str += `${curr.value} `
            curr = curr.next
        }
        console.log('List:', str)
    }
}


const queue = new Queue()

queue.enqueue(100)
queue.enqueue(200)
queue.unshift()
queue.print()
