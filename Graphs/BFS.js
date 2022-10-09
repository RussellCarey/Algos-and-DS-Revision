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

  BFS (v) {
    const visited = {}
    const queue = [v]
    let current = v

    while (queue.length > 0) {
      // Set current node
      visited[current] = true
      // Remove the node from the queue
      const removedParent = queue.shift()

      // For each of its children, add them to the queue.
      this.adjacencyList[current].forEach(child => {
        // Not the child has not been visited, push the child on the queue
        if (!visited[child]) queue.push(child)
      })

      // Set the new current as the first, newly pushed child.
      current = queue[0]
    }

    console.log(visited)
  }
}

const gunit = new Graph()
gunit.addVertex('A')
gunit.addVertex('B')
gunit.addVertex('C')
gunit.addVertex('D')
gunit.addVertex('E')
gunit.addVertex('F')

gunit.addEdge('A', 'B')
gunit.addEdge('A', 'C')
gunit.addEdge('B', 'D')
gunit.addEdge('C', 'E')
gunit.addEdge('D', 'E')
gunit.addEdge('D', 'F')
gunit.addEdge('E', 'F')

gunit.BFS('A')
