class Stack {
    constructor() {
        this.q1 = []
        this.q2 = []
    }

    push(value) {

        this.q2.push(value)
        console.log(this.q2,'q2'); // 300 200 100
        while (this.q1.length !== 0) {
            console.log(this.q2,'new value q2'); //200 100
            this.q2.push(this.q1[0]) //300 200
            this.q1.shift() 
        }

        this.q = this.q1
        this.q1 = this.q2
        this.q2 = this.q
        console.log(this.q2,'empty array ');
    }

    pop() {
        if (this.q1.length === 0)
            return
        this.q1.shift()
    }

    top() {
        if(this.q1.length === 0)
            return -1
        return this.q1[0]
    }

    size(){
        console.log(this.q1.length);
    }

    isEmpty(){
        return this.q1.length === 0
    }

    front() {
        return this.q1[0]
    }

    print(){
        for(let i = 0 ; i<this.q1.length;i++){
            console.log(this.q1[i],'showing');
        }
    }
}


const s = new Stack()

console.log(s.top());

s.push(300)
s.push(200)
s.push(100)
s.pop()

console.log(s.top());

s.print()
