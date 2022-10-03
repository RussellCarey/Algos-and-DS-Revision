// LIFO structure.

class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor () {
    this.first = null
    this.last = null
    this.size = 0
  }

  push (val) {
    const node = new Node(val)

    if (this.size === 0) {
      this.last = null
      this.first = node
      this.size += 1
      return this.size
    } else {
      node.next = this.first
      this.first = node
      this.size += 1
      return this.size
    }
  }

  pop () {
    // If nothing, return undefined.
    if (this.size === 0) return undefined

    // Save the first in the stack
    const temp = this.first
    // IF they are equal to eachother it is the last element left
    if (this.temp === this.first) {
      // So, set last to null
      this.last = null
    }
    // Set the first to the next one in the stack, first is going bye bye.
    this.first = this.first.next
    this.size--
    return temp.value
  }
}
