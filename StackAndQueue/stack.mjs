

class Stack {
    constructor(){
        this.items = []
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    push(value){
        this.items[this.size] = value
        this.size++
    }

    pop(){
        if(this.isEmpty())return null
        let removedItem = this.items[this.size - 1]
        this.size--
        this.items.length = this.size
        return removedItem
    }

    print(){
        for(let i = 0 ; i<this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

const stack = new Stack()

stack.push(200);
stack.push(500);

console.log(stack.pop());  // Outputs: 500
stack.print();  // Outputs: 200