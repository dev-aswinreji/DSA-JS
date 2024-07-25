
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }

    }

    search(root, value) {
        if (!root) {
            console.log('root is empty or invalid root');
            return
        } else {
            if (root.value === value) {
                console.log(value, 'found');
                return
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(this.right, value)
            }
        }
    }

    preOrder(root) {

        
        if (root) {
         console.log(root.value);
         this.preOrder(root.left)
         this.preOrder(root.right)
        }

    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    print() {
        console.log(this.root)
    }
}


const bst = new BinarySearchTree()

bst.print()

bst.insert(10)
bst.insert(5)

bst.insert(15)
bst.insert(7)
bst.insert(3)

// bst.search(bst.root, 6)
// bst.preOrder(bst.root)
// bst.print()
// bst.inOrder(bst.root)

bst.postOrder(bst.root)
