

class Node {              // Creating a Node class with value and next pointer
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {         // Creating a LinkedList class with head and its size of list
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {                 // This method check if the list is empty or not
        return this.size === 0
    }

    getSize() {                 // It return size of list
        return this.size
    }



    prepend(value) {             // It add values in the beginning of list   Big-O = O(1)
        // So time complexity is contant
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {              // It add values at the end of list  Big-O = O(n)
        const node = new Node(value)  // Time complexity is linear due to while loop 
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index) {                      // It insert value in the linked list
        if (index < 0 || index > this.size) {    // Time complexity is contant adding in beginning 
            console.log('provide the actual index');
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
        }
        this.size++
    }

    remove(index) {                  // Remove values from linked list 
        if (index < 0 || index >= this.size) {
            console.log('Provide actual index');
            return
        }
        let removeNode

        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    removeValue(value) {         // Remove node using values 
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            let removeNode
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null

        }
    }

    search(value) {             // Search value in a node and returning the index
        if (this.isEmpty()) {
            return -1
        } else {
            let curr = this.head
            let i = 0
            console.log(curr, 'curr is showing');
            while (curr) {
                if (curr.value === value) {
                    console.log(curr, 'curr is showing in if case');
                    return i
                }
                curr = curr.next
                i++
            }

            return -1

        }
    }

    print() {               // It print the list of value in the linked list
        if (this.isEmpty()) {
            console.log('list is empty');
        } else {

            let curr = this.head
            let listedValue = ''
            while (curr) {
                listedValue += `${curr.value} `
                curr = curr.next
            }
            console.log('List Values are :', listedValue);
        }
    }
}

const list = new LinkedList()

list.print()

console.log(list.getSize());

list.prepend(4)
list.prepend(5)

list.append(2)

list.insert(12, 2)

list.remove(0)
list.print()

console.log(list.getSize());

console.log(list.removeValue(4));

list.print()

console.log(list.search(2));

