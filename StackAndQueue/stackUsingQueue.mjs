class StackUsingQueue {
    constructor() {
        this.queue1 = []
        this.queue2 = []
    }

    push(value){

        this.queue2.push(value)

        while(this.queue1.length !== 0){
            this.queue2.push(this.queue1[0])
            this.queue1.shift()
        }

        let temp = this.queue1
        this.queue1 = this.queue2
        this.queue2 = temp
    }


    pop(){
        return this.queue1.shift()
    }

    top(){
        return this.queue1[0]
    }
}


const sq = new StackUsingQueue()

sq.push(100)

sq.push(200)

sq.push(300)

console.log(sq.pop(),'popped item');


console.log(sq.top(),'top item is showing');