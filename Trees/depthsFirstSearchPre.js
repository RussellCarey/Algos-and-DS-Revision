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

  // Similar to the DFS post, but pre adds the node to visited first, and then runs.
  traverse (node, visited) {
    visited.push(node)

    if (node.left) {
      this.traverse(node.left, visited)
    }

    if (node.right) {
      this.traverse(node.right, visited)
    }
  }

  DFSPre () {
    if (!this.root) return undefined

    const visited = []
    this.traverse(this.root, visited)

    const print = visited.map(n => n.value)
    console.log(print)
  }
}

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

// for (let i = 0; i < 50; i++) {
//   const randomINT = Math.ceil(Math.random() * 100)
//   tree.insert(randomINT)
// }

tree.DFSPre()
