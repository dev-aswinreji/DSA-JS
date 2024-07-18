

class QueueUsingStack {
    constructor() {
     this.s1 = []
     this.s2 = []   
    }

    enQueue(value){
        while(this.s1.length !==0){
            this.s2.push(this.s1.pop()) // 2 in s2
        }

        this.s1.push(value)  // 2 then 2 cleared and added 3
        console.log(this.s1,'s1');

        while(this.s2.length !== 0){
            this.s1.push(this.s2.pop())   // 3 then 2
        }
    }

    deQueue(){
        if(this.s1.length === 0){
            return null
        }
        let value = this.s1[this.s1.length - 1]
        console.log(this.s1,'s1 is showing');
        this.s1.pop()
        return value
    }

    print(){
        for(let i = 0; i< this.s1.length; i++){
            console.log(this.s1[i]);
        }
    }
}


const queue = new QueueUsingStack()

queue.enQueue(2)
queue.enQueue(3)
queue.enQueue(4)

console.log(queue.deQueue(),'removed Value');
queue.print()