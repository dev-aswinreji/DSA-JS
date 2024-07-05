

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

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        }
        if (index > 0) {
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

    append(value) {
        const node = new Node(value)
        let prev = this.head
        while (prev.next) {
            prev = prev.next
        }
        prev.next = node
    }

    print() {
        if (this.isEmpty()) {
            console.log('list is Empty');
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues, 'list values are showing');
        }
    }

}

const list = new LinkedList()

console.log(list.isEmpty(), 'is list Empty');
console.log(list.getSize(), 'size of linked list');


list.prepend(7)
list.prepend(8)

list.append(1)

list.prepend(2)


console.log(list.isEmpty(), 'is list Empty');
console.log(list.getSize(), 'size of linked list');


// list.print()

list.insert(10, 1)

list.print()
