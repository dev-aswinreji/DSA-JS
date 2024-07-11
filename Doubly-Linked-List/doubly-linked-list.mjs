

class Node {
    constructor(value) {
        this.prev = null
        this.value = value
        this.next = null
    }
}

class DoublyLinkedList {
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

    unshift(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.size++
    }

    shift() {
        if (this.isEmpty()) {
            this.head = null
            this.tail = null
        } else {
            let secondNode = this.head.next
            this.head = secondNode
            this.head.prev = null
        }
        this.size--
    }

    push(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            let lastNode = this.tail
            lastNode.next = newNode
            newNode.prev = lastNode
            this.tail = newNode
        }
        this.size++
    }

    pop() {
        if (this.isEmpty()) {
            console.log('List is empty')
        }
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let lastNode = this.tail
            lastNode.prev.next = null
            this.tail = lastNode.prev            
        }
        this.size--

    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log('Invalid index');
            return
        } else {
            const newNode = new Node(value)
            let prevNode = this.head
            for (let i = 0; i < index - 1; i++) {
                prevNode = prevNode.next
            }
            let nextNode = prevNode.next
            newNode.next = nextNode
            newNode.prev = prevNode
            nextNode.prev = newNode
            prevNode.next = newNode
            this.size++
        }
    }

    removeNodeUsingIndex(index) {
        if (index < 0 || index >= this.size) {
            console.log('Invalid index');
            return
        }
        if (index === 0) {
            this.shift()
        } else if (index === this.size - 1) {
            this.pop()
        } else {
            let curr = this.head
            let count = 0
            while(curr){
                console.log(count == index);
                if(count === index){
                    break
                }
                curr = curr.next
                count++
            }
            // 30 20 10
            let removingIndex = curr
            removingIndex.next.prev = removingIndex.prev
            removingIndex.prev.next = removingIndex.next
            removingIndex.prev = null
            removingIndex.next = null
            return -1
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head
            let list = ''
            while (curr) {
                list += `${curr.value} `
                curr = curr.next
            }
            console.log('List is showing:', list);
        }
    }
}


const list = new DoublyLinkedList()

list.unshift(10)
list.unshift(20)
// list.push(5)
list.unshift(30)
// list.shift()
// list.pop()


// list.insert(15, 1)

// list.print()
list.removeNodeUsingIndex(1)

list.print()

console.log(list.getSize());

