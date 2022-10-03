// FIFO
// Push new ones onto the end of the SLL.
// Deque from the first.
// If we deque from the last, we need to go though all the elements
// to get the prev from the end..

class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor () {
    this.first = null
    this.last = null
    this.size = 0
  }

  print () {
    let counter = 0
    let curr = this.first

    while (counter !== this.size - 1) {
      console.log(curr.val)
      curr = curr.next
      counter++
    }
  }

  enqueue (val) {
    const node = new Node(val)

    if (!this.first) {
      this.first = node
      this.last = node
      this.size++
    } else {
      this.last.next = node
      this.last = node
      this.size++
    }

    console.log('ENQUE')
    this.print()
    return this.size
  }

  dequeue () {
    if (!this.last) return undefined

    if (this.size === 1) {
      this.first = null
      this.last = null
      this.size--
    } else {
      const currFirst = this.first
      this.first = currFirst.next
      currFirst.next = null
      this.size--
    }

    console.log('DENQUE')
    this.print()
    return this.size
  }
}

const newQueue = new Queue()
newQueue.enqueue(1)
newQueue.enqueue(4)
newQueue.enqueue(5)
newQueue.enqueue(8)
newQueue.dequeue()
newQueue.dequeue()
newQueue.dequeue()
