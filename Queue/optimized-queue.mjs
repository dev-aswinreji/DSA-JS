
// While implementing shift() it makes linear time complexity in queue
// So that is not favorable


// We are using Object so we can enusure const time complexity

class Queue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element) {
        this.items[this.rear] = element
        this.rear++
    }

    dequeue() {
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear - this.front === 0
    }
    
    peak(){
        return this.items[this.front]
    }

    size(){
        this.rear + this.front
    }

    print(){
        console.log(this.items);
    }
}

const queue = new Queue()

console.log(queue.isEmpty());

queue.print()

queue.enqueue(40)

queue.print()

queue.enqueue(50)

queue.print()

queue.dequeue()

queue.print()


