
class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    isEmpty(){
        return this.rear === 0
    }

    getSize(){
        return this.rear
    }

    enqueue(value){
        this.items[this.rear] = value
        this.rear++
    }

    dequeue(){
        delete this.items[this.front]
        this.front++
    }

    print(){
            console.log(this.items);
    }
}

const queue = new Queue()

queue.enqueue(444)

queue.enqueue(343)



queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.enqueue(343)

queue.print()