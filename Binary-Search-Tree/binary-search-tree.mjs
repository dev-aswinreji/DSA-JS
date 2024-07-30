
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
                return this.search(root.right, value)
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

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder(root) {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    minNode(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.minNode(root.left)
        }
    }

    maxNode(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.maxNode(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }


    deleteNode(root, value) {                                // Delete node is toughest one we need to iterate through each recursive call inorder to understand
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if(value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }

            root.value = this.minNode(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    print() {
        console.log(this.root)
    }
}


const bst = new BinarySearchTree()

// bst.print()

bst.insert(10)
bst.insert(5)

bst.insert(15)
bst.insert(7)
// bst.insert(7)
bst.insert(3)
bst.insert(6)
bst.insert(8)

// bst.insert(21)
// bst.insert(24)
// bst.search(bst.root, 6)
// bst.preOrder(bst.root)
// bst.print()
// bst.inOrder(bst.root)

// bst.postOrder(bst.root)

// bst.levelOrder(bst.root)

// console.log(bst.maxNode(bst.root))

// console.log(bst.minNode(bst.root));
// bst.print()


bst.levelOrder()
console.log('first call ');

bst.delete(5)
bst.levelOrder()

console.log(3 < 3);
console.log(3 > 3);
