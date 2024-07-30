

class Graph {
  constructor () {
    this.adjacentList = {}
  }

  addVertex(vertex){
    if(!this.adjacentList[vertex]){
      this.adjacentList[vertex] = new Set()
    }
  }

  addEdges(vertex1,vertex2){
  if(!this.adjacentList[vertex1]){
     this.addVertex(vertex1) 
  }
  if(!this.adjacentList[vertex2]){
    this.addVertex[vertex2]
  }
  this.adjacentList[vertex1].add(vertex2)
  this.adjacentList[vertex2].add(vertex1)
  }

  removeEdges(vertex1,vertex2){
  this.adjacentList[vertex1].delete(vertex2)
  this.adjacentList[vertex2].delete(vertex1)
  }

  removeVertex(vertex){
  if(!this.adjacentList[vertex]){
    return 
  }
    for (const adjacentVertex in this.adjacentList[vertex]) {
      this.removeEdges(vertex,adjacentVertex)
    }
    delete this.adjacentList[vertex]
  }

  display(){
  for (const vertex in this.adjacentList) {
  console.log(vertex + '->' + this.adjacentList[vertex])
  }
 }
}


const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdges("A","B")
console.log(graph)

