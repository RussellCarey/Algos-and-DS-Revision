class Node {
  constructor (value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  // Check if we have a root and add it if we dont.
  // Set a curr to keep track of the node and the condition for the while loop.
  // IF value = curr node value return (we dont want duplicates)
  // If value is greater than current move right and if its less then move less.
  // If its less than and there is no node, add the node, same for right.
  insert (value) {
    const newNode = new Node(value)
    // Check if we have a root, if not set a new one
    if (!this.root) {
      this.root = newNode
      return this
    }

    let curr = this.root
    let placed = false

    while (placed === false) {
      if (value === curr.value) return undefined

      // Check right side of node
      if (value > curr.value) {
        if (!curr.right) {
          curr.right = newNode
          placed = true
          return this
        }
        curr = curr.right
      } else {
        // Check left side of node
        if (!curr.left) {
          curr.left = newNode
          placed = true
          return this
        }
        curr = curr.left
      }
    }

    return this
  }

  BFS () {
    const queue = [this.root]
    const visited = []

    while (queue.length > 0) {
      const removedNode = queue.shift()
      visited.push(removedNode)

      if (removedNode.left) queue.push(removedNode.left)
      if (removedNode.right) queue.push(removedNode.right)
    }

    const print = visited.map(n => n.value)
    console.log(print)
    return visited
  }
}

const tree = new BinarySearchTree()

for (let i = 0; i < 50; i++) {
  const randomINT = Math.ceil(Math.random() * 100)
  tree.insert(randomINT)
}

tree.BFS()
