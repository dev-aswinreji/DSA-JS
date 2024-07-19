
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize(){
        return this.size 
    }

    push(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.size++
    }

    pop() {
        let removeNode = this.top
        this.top = removeNode.next
        removeNode = null
        this.size--
    }

    reverse() {
        let curr = this.top
        let prev = null
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            console.log(prev,'prev');
            curr = next
        }
        this.top = prev
    }

    print() {
        let curr = this.top
        let str = ''

        while (curr) {
            str += `${curr.value} `
            curr = curr.next
        }

        console.log('List :', str);
    }
}

const stack = new Stack()


stack.push(40)

stack.push(50)

stack.pop()
stack.print()
// stack.reverse()

stack.print()