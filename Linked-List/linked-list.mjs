

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

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
            prev = prev.next
            }
            prev.next = node
            console.log(prev.next,'prev');
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log('object');
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

list.prepend(5)
list.prepend(6)

list.append(7)

console.log(list.isEmpty(), 'is list Empty');
console.log(list.getSize(), 'size of linked list');


list.print()
