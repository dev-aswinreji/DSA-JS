class QueueUsingStack {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(value) {
        this.stack1.push(value)
    }

    dequeue() {
        if (this.stack1.length !== 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop())
            }
            return this.stack2.pop()
        }
        // console.log('queue is empty');
        // return 
    }

    peek() {
        if (this.stack1.length !== 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop())
            }
            return this.stack2[this.stack2.length - 1]
        }
    }

    isEmpty() {
        return this.stack1.length === this.stack2.length
    }

    print() {
        let result = [];

        for (let i = this.stack2.length - 1; i >= 0; i--) {
            result.push(this.stack2[i]);
        }
        for (let i = 0; i < this.stack1.length; i++) {
            result.push(this.stack1[i]);
        }

        console.log("Queue contents:", result);
    }
}


const qs = new QueueUsingStack()

// qs.dequeue()

qs.enqueue(50)

qs.enqueue(100)

qs.dequeue()

qs.print()