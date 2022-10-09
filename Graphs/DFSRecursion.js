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

  DFSTraversal (v, visited) {
    visited[v] = true

    if (v.length > 0) {
      this.adjacencyList[v].forEach(e => {
        if (!visited[e]) this.DFSTraversal(e, visited)
      })
    }
  }

  DFSRecursive (v) {
    if (!v) return console.log('No Starting vertex found')

    const visited = {} // A: True
    visited[v] = true

    this.DFSTraversal(v, visited)
    console.log(visited)
  }

  DFSItterative (v) {
    const s = []
    const visited = {}
    s.push(v)

    while (s.length > 0) {
      const vertex = s.pop()

      if (!visited[vertex]) {
        visited[vertex] = true

        this.adjacencyList[vertex].forEach(n => {
          s.push(n)
        })
      }
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

gunit.DFSItterative('A')
