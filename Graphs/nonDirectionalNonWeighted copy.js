class Graph {
  constructor () {
    this.adjacencyList = {}
  }

  addVertex (name) {
    // If not there, create
    if (!this.adjacencyList[`${name}`]) {
      this.adjacencyList[`${name}`] = []
    }
  }

  addEdge (v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge (v1, v2) {
    const filteredV1 = this.adjacencyList[v1].filter(l => l !== v2)
    const filteredV2 = this.adjacencyList[v2].filter(l => l !== v1)
    this.adjacencyList[v1] = filteredV1
    this.adjacencyList[v2] = filteredV2
  }

  removeVertex (v) {
    // Loop through removing vertex
    while (this.adjacencyList[v].length) {
      // Get vertex name its connected to
      const adjacentVertex = this.adjacencyList[v].pop()
      // Remove the edge connecting this and that connection (as we need to remove on both)
      this.removeEdge(v, adjacentVertex)
    }

    // Delet vertex fully after removing connections
    delete this.adjacencyList[v]
  }
}

const gunit = new Graph()
gunit.addVertex('1')
gunit.addVertex('2')
gunit.addEdge('1', '2')
gunit.removeVertex('2')
console.log(gunit.adjacencyList)
