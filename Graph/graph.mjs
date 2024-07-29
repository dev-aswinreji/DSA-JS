
class Graph {
  constructor () {
  this.adjacencyList = {} 
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex]  = new Set()
    }
  }

  addEdges(vertex1,vertex2){
    if(!this.adjacencyList[vertex1]){
      this.addVertex(vertex1)
    }
    if(!this.adjacencyList[vertex2]){
      this.addVertex(vertex2)
    }

     this.adjacencyList[vertex1].add(vertex2)
     this.adjacencyList[vertex2].add(vertex1)
  }

  hasEdge(vertex1,vertex2){
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    )
  }

  removeEdge(vertex1,vertex2){
      this.adjacencyList[vertex1].delete(vertex2)
      this.adjacencyList[vertex2].delete(vertex1)
  }

  removeVertex(vertex){
    if(!this.adjacencyList[vertex]){
      return
    }else{
    for(let adjacentVertex of this.adjacencyList[vertex])
      this.removeEdge(vertex,adjacentVertex)
    }

    delete this.adjacencyList[vertex]
  }

  display(){
    for (const vertex in this.adjacencyList) {
       console.log(vertex + '->' + [...this.adjacencyList[vertex]]) 
    }
  }
}


const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdges("A","B")

graph.addEdges("B","C")

graph.display()

console.log(graph.hasEdge("A","B"))

graph.removeEdge("A","B")

console.log(graph.hasEdge("A","B"))
graph.removeVertex("B")
graph.display()





















//      (A)
//    /    \
//   /      \
// (B) ---- (C)


// Adjacency Matrix of Undirected Graph
const matrix = [
  // A,B,C
    [0,1,1], //A
    [1,0,1], //B
    [1,1,0]  //C
]

console.log(matrix[0][1]);  // A-B 



//     (A)
//    /   \
//   /     \
// (B)     (C)


// This is our Graph Structure and we are going to make a Adjacency Metrix

const adjacencyMatrix = [
  // A,B,C 
    [0,1,0],//A
    [1,0,1],//B
    [0,1,0] //C
]

// Adjacency List 

const adjacencyList = {
  'A':['B'],
  'B':['A','C'],
  'C':['B']
}

console.log(adjacencyList['C'])

