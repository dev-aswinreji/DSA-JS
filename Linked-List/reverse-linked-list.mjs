

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
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // Insertion at end is O(n)

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log('invalid index');
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeUsingIndex(index) {
        if (index < 0 || index >= this.size) {
            console.log('invalid index');
            return
        } if (index === 0) {
            this.head = this.head.next
        } else {
            let prev = this.head
            let removeNode
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
    }

    removeUsingValues(value) {
        if (this.isEmpty()) {
            console.log('list is empty');
            return
        }
        let removeNode
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.value && prev.next.value !== 0) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
            this.size--
            return value
        }
    }

    reverseList(){
        if(this.isEmpty()){
            console.log('list is empty');
            return 
        }else{
            let prev = null
            let curr = this.head
            while(curr){
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }
            this.head = prev
        }
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
list.append(4)
list.insert(5, 2)

list.removeUsingIndex(3)
list.removeUsingValues(6)
list.reverseList()
list.print()

console.log(list.getSize());